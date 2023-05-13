export const AboutMe = () => {
  return (
    <>
      <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre mi</h2>
          <p>
            <span>Hola,Soy Sergio Linares</span> Responsable, dinámica, amigable y humanitaria, con una fuerte motivación para alcanzar metas a corto y largo plazo. Habilidades en el manejo de programas como Photoshop y Sony Vegas, así como en diferentes lenguajes de programación, consultas estructuradas, Frameworks, librerías y lenguajes de etiquetas como Java, Python, SQL, node.js, React, JavaScript, HTML y CSS. Conocimientos de diseño sistemas informáticos y desarrollo de software con herramientas como U.M.L, diseño de bases de datos, estructura de datos, metodologías ágiles SCRUM y Git.

          </p>
          <div className="fila">
            <div className="col" >
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Telefono</strong>
                  +57 3202813850
                </li>
                <li>
                  <strong>Email</strong>
                  sergiolinareslm@gmail.com
                </li>
                <li>
                  <strong>Cumpleaños</strong>
                  1999/02/04
                </li>
                <li>
                  <strong>Git</strong>
                  <a>https://github.com/Dranvius</a>
                </li>
                <li>
                  <strong>País - Ciudad</strong>
                  Colombia - Bogotá
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Interes</h3>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <div className="interes">
                    <img
                      src="src/icons/mando.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>VideoJuegos</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/libro-de-lectura.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Lectura</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/gym-equipment.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Ejercicio</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/camara-fotografica.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Fografia</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/motocicleta.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Motos</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/pop-corn.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Peliculas</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/pelicula.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Edición</span>
                  </div>
                  <div className="interes">
                    <img
                      src="src/icons/runer-silhouette-running-fast.png"
                      alt="Pesas"
                      style={{ width: 40, height: 40 }}
                    />
                    <span>Running</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button  onClick={() => {location.href='./src/docs/Me.pdf'}}>
          Descargar Hoja de vida
          <span className="overLay"></span>
        </button>
      </section>
    </>
  );
};
