import React from 'react';
import './styles.css';
import backgroundImage from './images/blackandwhite.jpg'; // Importa la imagen de fondo
import deadcenter1Image from './images/deadcenter1.jpg'; // Importa la imagen amarilla
import darkcarnivalImage from './images/darkcarnival.jpg'; // Importa la imagen de zombies
import nomercyImage from './images/nomercy.jpg'; // Importa la imagen de fondo para las tarjetas

function App() {
  // Datos de ejemplo para las tarjetas
  const cardsData = [
    { id: 1, image: deadcenter1Image, title: 'Título de la tarjeta 1', content: 'Contenido de la tarjeta 1' },
    { id: 2, image: darkcarnivalImage, title: 'Título de la tarjeta 2', content: 'Contenido de la tarjeta 2' },
    { id: 3, image: nomercyImage, title: 'Título de la tarjeta 3', content: 'Contenido de la tarjeta 3' },
    // Agrega más datos según sea necesario
  ];

  return (
    <div>
      {/* Menú */}
      <div className="menu">
        <ul>
          <li>Inicio</li>
          <li>Juegos</li>
          <li>Noticias</li>
          <li>Foros</li>
          <li>Eventos</li>
          <li>Contacto</li>
        </ul>
      </div>
      {/* Contenido principal */}
      <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="header">Left 4 Dead 2</h1>
        <div className="content">
          <p className="message">¡Bienvenido a la página de Left 4 Dead 2!</p>
        </div>
      </div>
      <div className="card-container">
        {cardsData.map(card => (
          <div key={card.id} className="card">
            <div className="card-content">
              <img src={card.image} alt={`Imagen ${card.id}`} />
              <div className="overlay">
                <h2 className="title">{card.title}</h2>
                <p className="content">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;