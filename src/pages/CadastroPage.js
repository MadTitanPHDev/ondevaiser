//importar o react
import React, { useState } from 'react';
//importar o estilo
import './CadastroPage.css';

import { useForm } from 'react-hook-form';


//função default que constroi os elementos da pagina
function CadastroPage() {
    //retorna elementos visuais e componentes(pagina)
    const [formDados, setFormDados] = useState({ nome: '', apelido: '', email: '', password: '', number: '' });
    //{} objeto JSON

    function handleChange(event) {//toda funcao recebe argumentos(arg1, arg2)
        console.log(event.target.value);
        setFormDados({ ...formDados, [event.target.name]: event.target.value })
    }




    return (
        <section className='container'>

            <div className='formArea'>
                <form>
                    <div className='campoArea'>
                        <label>Nome</label>
                        <input className='inputArea' type='text' name='nome' id='nome' onChange={event => handleChange(event)} value={formDados.nome} />
                    </div>

                    <div className='campoArea'>
                        <label>Apelido</label>
                        <input className='inputArea' type='text' name='nick' id='nick' onChange={event => handleChange(event)} value={formDados.nick} />
                    </div>

                    <div className='campoArea'>
                        <label>Email</label>
                        <input className='inputArea' type='email' name='email' id='email' onChange={event => handleChange(event)} value={formDados.email} />
                    </div>

                    <div className='campoArea'>
                        <label>Senha</label>
                        <input className='inputArea' type='password' name='password' id='password' onChange={event => handleChange(event)} value={formDados.password} />
                    </div>

                    <div className='campoArea'>
                        <label>Numero de telefone com WhatsApp</label>
                        <input className='inputArea' type='number' name='number' maxLength={11} id='number' onChange={event => handleChange(event)} value={formDados.number} />
                    </div>

                    <div className='btnArea'>
                        <input className='buttonSubmit' type='submit' value='Concluir' />
                    </div>

                </form>


            </div>
        </section>



    )
}

export default CadastroPage;