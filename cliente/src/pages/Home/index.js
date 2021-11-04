import * as React from 'react';
import style from '../Home/home.module.css';

function Home() {
    return(
    <>
    <div id={style.container}>
        <h1 className={style.titulo}>Renta un inmueble sin estres ni preocupaciones</h1>
        <section id={style.content}>
            <div>
                <img className={style.icono} src="/assets/img/foto.png" alt="camara"></img>
                <h2 className={style.subTitulo}> Todas nuestras fotos son reales y sin retoques</h2>
            </div>
            <div>
                <img className={style.icono} src="/assets/img/ubicacion.png" alt="ubicacion"></img>
                <h2 className={style.subTitulo}> Excelente ubicacion de nuestros inmuebles</h2>
            </div>
            <div>
                <img className={style.icono} src="/assets/img/pago.png" alt="pago"></img>
                <h2 className={style.subTitulo}> Seguridad en los pagos mensuales</h2>
            </div>
        </section>
        </div>
     </>
    )
}

export default Home;