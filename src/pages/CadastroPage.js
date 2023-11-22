//importar o react
import React, { useState } from 'react';
//importar o estilo
import './CadastroPage.css';

import { useForm } from 'react-hook-form';


//função default que constroi os elementos da pagina
function CadastroPage() {
    //retorna elementos visuais e componentes(pagina)
    const[formDados, setFormDados] = useState({nome: '', apelido: '', email:'', password:'', number: ''});
    //{} objeto JSON

    function handleChange(event){//toda funcao recebe argumentos(arg1, arg2)
        console.log(event.target.value);
        setFormDados({...formDados,[event.target.name]: event.target.value})
    }


    

    return (
        <section className='container'>
            <div className='formArea'>
                <form>
                    <label>Nome</label>
                    <input type='text' name='nome' id='nome' onChange={event => handleChange(event)} value={formDados.nome}/>

                    <label>Apelido</label>
                    <input type='text' name='nick' id='nick' onChange={event => handleChange(event)} value={formDados.nick}/>

                    <label>Email</label>
                    <input type='email' name='email' id='email' onChange={event => handleChange(event)} value={formDados.email}/>

                    <label>Senha</label>
                    <input type='password' name='password' id='password' onChange={event => handleChange(event)} value={formDados.password}/>

                    <label>Numero de telefone com WhatsApp</label>
                    <input type='number' name='number' id='number' onChange={event => handleChange(event)} value={formDados.number}/>

                    

                    <input type='submit' value='enviar' />
                </form>

                {JSON.stringify(formDados)}
            </div>
        </section>
       


    )
}

export default CadastroPage;