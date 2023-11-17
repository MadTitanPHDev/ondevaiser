//importar o react
import React from 'react';
//importar o estilo
import './CardHome.css';
import LogoOndeVaiSer from '../images/LogoOndeVaiSer.png';

//função default que constroi os elementos da pagina
function CardHome() {
    //retorna elementos visuais e componentes(pagina)
    return (
        <a href='#' className='cardAreaTotal'>
            <div className='cardArea'>
                <h1 className='cardTxt'>Exemplo de texto</h1>
            </div>
        </a>
    )
}

export default CardHome;