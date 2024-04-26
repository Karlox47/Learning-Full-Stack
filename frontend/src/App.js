import React, { useState, useEffect } from 'react';
import './styles.css';
import backgroundImage from './images/blackandwhite.jpg'; // Importa la imagen de fondo

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}> {/* Utiliza la imagen de fondo */}
      <h1 className="header">Left 4 Dead 2</h1>
      <div className="content">
        <p className="message">¡Bienvenido a la página de Left 4 Dead 2!</p>
        {/* Aquí podrías agregar más contenido relacionado con el juego */}
      </div>
    </div>
  );
}

export default App;