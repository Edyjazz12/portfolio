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
          <h4>todo-list-MERN</h4>
          <p>Sitio de tareas con mern.</p>
          <a href="https://github.com/Edyjazz12/todo-list-mern" target="_blank">Ver en GitHub</a>
        </div>

      
      </section>
    </div>
  );
}

export default App;
