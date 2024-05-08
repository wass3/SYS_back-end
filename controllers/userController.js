const User = require('../models/userModel');

// Controlador para manejar las operaciones relacionadas con los usuarios
const userController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  test: async (req, res) => {
    res.send('funciona perfe');
  },

  // Crear un nuevo usuario
  createUser: async (req, res) => {
    const { user_handler, name, surname, biography, email_address, password, user_img } = req.body;
    try {
      const newUser = await User.create({ user_handler, name, surname, biography, email_address, password, user_img });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  // Obtener un usuario por su ID
  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
  },

  // Actualizar un usuario existente
  updateUser: async (req, res) => {
    const userId = req.params.id;
    const { user_handler, name, surname, biography, email_address, password, user_img } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.update({ user_handler, name, surname, biography, email_address, password, user_img });
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  },

  // Eliminar un usuario
  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  }
};

module.exports = userController;
