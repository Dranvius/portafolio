export const PortafolioComponent = () =>{

    return(
        <>
        <section id="portafolio" className="portafolio">
            <div className="contenido-seccion">
                <h2>PORTAFOLIO</h2>
                <div className="galeria">
                    <div className="proyecto">
                        <img src="src/img/CRM.png" alt="" />
                        <div className="overLay">
                            <h3>CRM Linares Modulares</h3>
                            <p>Desarrollo de software</p>
                        </div>
                    </div>
                
                
                    <div className="proyecto">
                        <img src="src/img/hollow_jack.png" alt="" />
                        <div className="overLay">
                            <h3>Hollow Jack</h3>
                            <p>Juego de cartas Html css JS</p>
                        </div>
                    </div>
                
                
                    <div className="proyecto">
                        <img src="src/img/LinaresModulares.png" alt="" />
                        <div className="overLay">
                            <h3>Linares Modulares web</h3>
                            <p>Desarrollo WEB sin frameworks</p>
                        </div>
                    </div>
                
                
                    <div className="proyecto">
                        <img src="src/img/java.png" alt="" />
                        <div className="overLay">
                            <h3>Diseño de software</h3>
                            <p>Fotografia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}