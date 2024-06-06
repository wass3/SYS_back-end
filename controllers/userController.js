const User = require('../models/userModel.js');

const { supabase } = require('../config/supabase.js');


// Controlador para manejar las operaciones relacionadas con los usuarios
const userController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      console.log('Obteniendo usuarios...');
      const user = await User.findAll();
      console.log('Usuarios obtenidos:', user);
      res.status(200).json({
        ok: true,
        status: 200,
        user: user
      });
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
      const newUser = await User.create({
        user_handler,
        name,
        surname,
        biography,
        email_address,
        password,
        user_img,
      });

      supabase.createUser({
        email: email_address,
        password: password
      })
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  // Iniciar sesión
  login: async (req, res) => {
    const { email_address, password } = req.body;
    try {
      const user = await User.findOne({ where: { email_address } });
      if (user && (await user.comparePassword(password))) {
        res.status(200).json({ token: user.generateToken() });
      } else {
        res.status(401).json({ error: 'Credenciales inválicas' });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ error: 'Error al iniciar sesión' });
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
