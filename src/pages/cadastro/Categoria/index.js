
import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

    console.log('[nomeDaCategoria]', nomeDaCategoria);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
            <form>
                {/* State */}
                <table border="0">
                    <tr>
                        <td>Nome da Categoria:</td>
                        <td>
                            <input type="text" />
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