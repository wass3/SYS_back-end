// userController.js
const User = require('../models/userModel.js');

const { supabase } = require('../config/supabase.js');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      console.log('Obteniendo usuarios...');
      const users = await User.findAll();
      console.log('Usuarios obtenidos:', users);
      res.status(200).json({
        ok: true,
        status: 200,
        users: users
      });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  getUserByEmail: async (req, res) => {
    const { email_address } = req.params;
    try {
      const user = await User.findOne({ where: { email_address } });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener usuario por email:', error);
      res.status(500).json({ error: 'Error al obtener usuario por email' });
    }
  },

  test: async (req, res) => {
    res.send('funciona perfe');
  },

  createUser: async (req, res) => {
    const { user_handler, name, surname, biography, email_address, password, user_img } = req.body;
    try {
      const newUser = await User.create({
        user_handler,
        name,
        surname,
        biography,
        email_address,
        password,
        user_img,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  login: async (req, res) => {
    const { email_address, password } = req.body;
    try {
      const user = await User.findOne({ where: { email_address } });
      if (user && (await user.comparePassword(password))) {
        const token = user.generateToken();
        const userData = {
          ...user.dataValues,
          token,
        };
        res.status(200).json(userData);
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  },

  

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

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.destroy();
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
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

