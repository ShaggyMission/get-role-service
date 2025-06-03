const UserRole = require('../models/userRoleModel');
const Role = require('../models/roleModel');

const getUserRole = async (req, res) => {
  try {
    const { userId } = req.params;

    const userRole = await UserRole.findOne({
      where: { userId },
      include: { model: Role }
    });

    if (!userRole) {
      return res.status(404).json({ message: 'Role not found for this user.' });
    }

    res.status(200).json({ userId, role: userRole.Role.roleName });
  } catch (error) {
    console.error('Error fetching role:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserRole };
