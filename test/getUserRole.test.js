const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:', { logging: false });

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  roleName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

const UserRole = sequelize.define('UserRole', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Role.hasMany(UserRole, { foreignKey: 'roleId' });
UserRole.belongsTo(Role, { foreignKey: 'roleId' });

describe('Simple Role and UserRole tests', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a role and assign a userRole', async () => {
    const role = await Role.create({ roleName: 'Admin' });

    const userRole = await UserRole.create({
      userId: 'user123',
      roleId: role.id,
    });

    expect(role.id).toBeDefined();
    expect(role.roleName).toBe('Admin');

    expect(userRole.userId).toBe('user123');
    expect(userRole.roleId).toBe(role.id);
  });
});
