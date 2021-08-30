import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //Basicamente al mas minimo cambio renderiza todo
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        //Evita que el navegador use el envio submit antiguo
        e.preventDefault();
        if(inputValue.length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                //Esto es para cambiar el estado y no dejar que se quede estatico el input
                onChange={handleInputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;