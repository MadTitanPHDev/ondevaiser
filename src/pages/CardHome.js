//importar o react
import React from 'react';
//importar o estilo
import './CardHome.css';
import Chacara00 from '../images/chacara00.jpg';

//função default que constroi os elementos da pagina
function CardHome() {
    //retorna elementos visuais e componentes(pagina)
    return (

        <div className='cardAreaAll'>
            <h1 className='oq'>O que?</h1>
            <a href='#' className='cardAreaTotal'>
                <div className='cardArea'>
                    <h1 className='cardTxt'>Exemplo de texto</h1>
                </div>
            </a>
        </div>

    )
}

export default CardHome;