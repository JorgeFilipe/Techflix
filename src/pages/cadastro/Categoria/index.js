import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import './index.css';

function CadastroCategoria() {
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
            <form>
                {/* State */}
                <table border="0">
                    <tr>
                        <td>Nome da Categoria:</td>
                        <td>
                            <input
                                type="text"
                                value={nomeDaCategoria}
                                onChange={
                                    function funcaoHandler(){
                                        console.log('[nomeDaCategoria]', nomeDaCategoria);
                                    }
                                }
                            />
                        </td>
                        <td>
                            <button>
                                Cadastrar
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;