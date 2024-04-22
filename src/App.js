import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const gatos = [
    {
      id: 1,
      nombre: "Nina",
      edad: 3,
      descripcion:
        "Nina es una gata juguetona y cariñosa que le encanta perseguir ratones de juguete.",
      imagen:
        "https://cdn.discordapp.com/attachments/1159212210090942469/1231460210845941850/WhatsApp_Image_2024-04-20_at_11.20.38_PM.jpeg?ex=6625e631&is=662494b1&hm=c18cc96af53d1c9d694218e57741523caa5d2efabd3ff4fe894faa3d331a00f2&",
    },
    {
      id: 2,
      nombre: "Luna",
      edad: 2,
      descripcion:
        "Luna es una gata tranquila y curiosa que disfruta pasar tiempo en la ventana observando pájaros.",
      imagen:
        "https://media.discordapp.net/attachments/1159212210090942469/1231459750957285426/WhatsApp_Image_2024-04-20_at_11.20.38_PM_1.jpeg?ex=6625e5c4&is=66249444&hm=9fdf51b4f6bf4b22485bdd201cf8edc98785f312f32b2ba06e134653288d9584&=&format=webp&width=351&height=468",
    },
  ];

  const adoptaGatoContenido = (
    <>
      <h2 className="text-darkbrown mb-4">Adopta un Gato</h2>
      <p className="lead">¡Gracias por considerar adoptar un gato!</p>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://cdn.discordapp.com/attachments/1159212210090942469/1231734881743015986/pet-adoption-with-cute-little-kitten-vector.png?ex=66380980&is=66259480&hm=9896c0f786652b1da31c80c99f7e803525354539f35f72187cb9e13449541f5c&"
            alt="Gato para adoptar"
            className="img-fluid rounded mb-3"
            style={{ width: 300 }}
          />
        </div>
        <div className="col-md-6">
          <p className="font-italic parrafo1">
            En nuestro refugio tenemos una variedad de gatos de todas las
            edades, tamaños y personalidades esperando encontrar un hogar
            amoroso. Todos nuestros gatos están esterilizados, vacunados y en
            busca de un nuevo comienzo.
          </p>
          <p className="parrafo2 mb-4">
            Para obtener más información sobre cómo adoptar uno de nuestros
            gatos, por favor contáctanos al siguiente número:
          </p>
          <p className="lead mb-0">Teléfono: 123-456-789</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="App">
      <header className="App-header bg-warning-subtle text-dark">
        <div className="container">
          <h1>Bienvenido a Patitas Suaves</h1>
          <p>¡Aquí puedes encontrar información sobre diferentes gatos!</p>
        </div>
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-light p-4 rounded mb-4">
              <h2 className="text-darkbrown mb-4">Nuestros Gatos</h2>
            </div>
            <div className="card-deck">
              {gatos.map((gato) => (
                <div key={gato.id} className="card mb-3">
                  <h5 className="card-title">{gato.nombre}</h5>
                  <img
                    src={gato.imagen}
                    alt={gato.nombre}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">        
                    <p className="card-text">Edad: {gato.edad} años</p>
                    <p className="card-text">{gato.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-4 rounded">
              {adoptaGatoContenido}
            </div>

            <div className="card-deck mt-4">
                <div className="card mb-3">
                  <h5 className="card-title">Noa</h5>
                  <img
                    src="https://cdn.discordapp.com/attachments/1159212210090942469/1231761130523852881/WhatsApp_Image_2024-04-21_at_7.18.03_PM.jpeg?ex=663821f2&is=6625acf2&hm=a84e0d277a0d4c2a54bf8c89e1afdaa42dc82c7be6dc8a067bc2540ae02a54d7&"
                    alt='Noa'
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">        
                    <p className="card-text">Edad: 3 años</p>
                    <p className="card-text">Una gatita con mirada seria pero es muy juguetona, le encanta jugar con otras mascotas</p>
                  </div>
                </div>
            </div>     
          </div>
        </div>
      </main>
      <footer className="bg-black text-white py-4">
        <div className="container">
          <p>&copy; 2024 Página de Gatos</p>
          <p>Contacto: info@paginadegatos.com</p>
          <p>Teléfono: 987-654-321</p>
          <p>
            Síguenos en redes sociales:{" "}
            <a href="https://www.facebook.com/" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/" className="social-icon">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
