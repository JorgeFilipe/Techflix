
import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categorias</h1>
            <form>
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