import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="header">Left 4 Dead 2</h1>
      <div className="content">
        <p className="message">¡Bienvenido a la página de Left 4 Dead 2!</p>
        {/* Aquí podrías agregar más contenido relacionado con el juego */}
      </div>
    </div>
  );
}

export default App;