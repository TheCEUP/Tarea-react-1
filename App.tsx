import React from 'react';
import RegisterForm, { UserData } from './RegisterForm';

const App: React.FC = () => {
  const handleRegister = (userData: UserData) => {
    console.log('Usuario registrado:', userData);
    // Aquí puedes realizar cualquier lógica adicional, como enviar los datos al servidor.
  };

  return (
    <div className="App">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default App;