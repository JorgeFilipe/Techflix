import React from "react";

function FormField() {
    return (
        <div>
            <label>
                Nome da Categoria:
                <input
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}

                />
            </label>
        </div>
    )
}

export default FormField;