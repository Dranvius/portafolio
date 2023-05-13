import axios from 'axios';

const peticion = async (valores) => {

    try {
        const peticion = await axios.post("http://localhost:3000/mensaje",{
        nombre :valores[0] ,
        celular :valores[1],
        correo: valores[2],
        necesidad: valores[3],
        textoEscrito: valores[4]
    });
        console.log(peticion)    
    } catch (error) {
        console.log(error);
    }

}

export const Contactos = () => {
    
    const handdlerContacto = (e) =>{
        e.preventDefault();
        
        let valores = [];

        for(let i = 0; i < 5; i++){
            valores.push(e.target[i].value)
        }

        peticion(valores)
    }

    return (
        <>
            <section className="contacto" id="contacto">
                <div className="contenido-seccion">
                    <h2>Contacto</h2>
                    <div className="fila">

                        <div className="col">
                            <form id="formulario" onSubmit={(e) => {handdlerContacto(e)}}>
                            <input type="text" placeholder="Tú nombre" />
                            <input type="number" placeholder="Número Telefónico" />
                            <input type="email" placeholder="Dirreción de correo electronico" />
                            <input type="text" placeholder="Tema" />
                            <textarea id="textArea" cols="30" rows="10" placeholder="Mensaje"></textarea>    
                            <button>
                                Enviar Mensaje
                                <span className="overLay"></span>
                            </button>
                            </form>
                        </div>

                        <div className="col">
                            <img src="src/img/MAP.png" alt="" />
                            <div className="info">
                                <ul>
                                    <li>
                                    <strong>Colombia - Bogotá</strong>
                                    </li>
                                    <li>
                                        <strong>+57 3202813850</strong>
                                    </li>
                                    <li>
                                        <strong>sergiolinareslm@gmail.com</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}