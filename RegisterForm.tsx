import React, { useState } from 'react';
import './App.css';

interface RegisterFormProps {
  onSubmit: (userData: UserData) => void;
}

export interface UserData {
  username: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(userData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>
      <div className="form-group">
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="btn-container">
        <button type="submit" className="button">Registrarse</button>
      </div>
    </form>
  );
};

export default RegisterForm;

