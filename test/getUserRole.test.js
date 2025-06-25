const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');
const Role = require('../models/roleModel');
const UserRole = require('../models/userRoleModel');

describe('GET /roles/user-role/:userId', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true }); // limpia la base de datos antes de cada test
  });

  it('should return role of a user', async () => {
    const role = await Role.create({ roleName: 'Admin' });
    await UserRole.create({ userId: 'user123', roleId: role.id });

    const res = await request(app).get('/roles/user-role/user123');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      userId: 'user123',
      role: 'Admin'
    });
  });

  it('should return 404 if user has no role assigned', async () => {
    const res = await request(app).get('/roles/user-role/unknownUser');

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Role not found for this user.');
  });

  it('should handle internal server error', async () => {
    const originalFind = UserRole.findOne;
    UserRole.findOne = () => { throw new Error('DB Failure') };

    const res = await request(app).get('/roles/user-role/user123');

    expect(res.statusCode).toBe(500);
    expect(res.body.message).toBe('Server error');

    UserRole.findOne = originalFind;
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
