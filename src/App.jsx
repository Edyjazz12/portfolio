import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Eduardo Ortega</h1>
        <h2>Desarrollador Fullstack</h2>
        <p>
          Soy un desarrollador fullstack con conocimientos en React, Node.js y MongoDB. 
          Me encuentro en búsqueda activa de trabajo y tengo varios proyectos en GitHub.
        </p>
      </header>

      <section className="projects">
        <h3>Proyectos Destacados</h3>

        <div className="card">
          <h4>E-commerce Fullstack</h4>
          <p>Sitio de ventas con carrito y CRUD de productos.</p>
          <a href="https://github.com/Edyjazz12/ecommerce" target="_blank">Ver en GitHub</a>
        </div>

        <div className="card">
          <h4>App del Clima</h4>
          <p>Consulta de clima actual con consumo de API.</p>
          <a href="https://github.com/Edyjazz12/clima" target="_blank">Ver en GitHub</a>
        </div>

        <div className="card">
          <h4>Juego Adivina el Número</h4>
          <p>Juego interactivo hecho con JavaScript.</p>
          <a href="https://github.com/Edyjazz12/juegoadivina" target="_blank">Ver en GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default App;
