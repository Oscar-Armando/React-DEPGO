import * as React from 'react';
import style from '../Footer/footer.module.css';
import {Link} from 'react-router-dom';

function FooterContainer() {
    return(
        <>
        <footer id={style.fo}>
            <div className={style.container}>
                <div id={style.c1}>
                    <div className={style.row}>
                        <li>
                            <Link to='/terminos-y-condiciones' class="text-reset">Terminos y Condiciones</Link>
                        </li>
                        <li>
                            <Link to='/politicas-de-privacidad' class="text-reset">Politicas de Privacidad</Link>
                        </li>
                    </div>
                </div>
                <div id={style.c1}>
                    <div className={style.row}>

                    </div>
                </div>
                <div id={style.c1}>
                    <div className={style.row}>

                    </div>
                </div>
                <div id={style.c1}>
                    <div className={style.row}>
                        <li>
                            <Link to='/ayuda' class="text-reset">Ayuda</Link>
                        </li>
                        <li>
                            <Link to='/preguntas-frecuentes' class="text-reset">Preguntas frecuentes</Link>
                        </li>
                    </div>
                </div>    
            </div>
        </footer>
        </>
    );
}

export default FooterContainer;