export const Inicio =  () => {
    return(
        <section className="inicio" id="inicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <div className="class-img"></div>
            </div>
            
        <img className = "pic" src="./src/img/Sergio.jpg" alt="Sergio" />

        <h1>
            Sergio Linares
        </h1>
        <h2>
            Ingeniero de sistemas <br/> FullStack Developer
        </h2>
        <div className="redes">
            <a href="https://www.linkedin.com/in/sergio-numael-linares-ducuara-994266196/"><img src="./src/icons/icone-linkedin-ronde-jaune.png" alt="linkin" style={{width:30, height:30}} /></a>
            <a href="https://github.com/Dranvius"><img src="./src/icons/git.png" alt="git" style={{width:30, height:30}}/></a>
        </div>

        </div>

    </section>
    )

}