import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import './index.css';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']);

    const valoresIniciais = {
        nome:'Categoria Ini',
        descricao:'Descrição Ini',
        cor:'#00b9e7',
    }

    const [values, setValues] = useState(valoresIniciais);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form /*style={{ background: nomeDaCategoria}}*/ onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            value={values.nome}
                            onChange={
                                function funcaoHandler(infosDoEvento) {
                                    //setNomeDaCategoria(infosDoEvento.target.value);
                                }
                            }
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            onChange={
                                function funcaoHandler(infosDoEvento) {
                                    //setNomeDaCategoria(infosDoEvento.target.value);
                                }
                            }
                        />
                    </label>
                    
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            onChange={
                                function funcaoHandler(infosDoEvento) {
                                    //setNomeDaCategoria(infosDoEvento.target.value);
                                }
                            }
                        />
                    </label>
                </div>
                <button>
                    Cadastrar
                            </button>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })
                }
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;