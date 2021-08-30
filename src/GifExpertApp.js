import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        //Recuerda, el estado no se muta, simplemente se suma sus propiedades con su agregado nuevo
        //al cambiar el estado se renderiza el componente de nuevo
        //setCategories(['HunterXHunter', ...categories]);
        setCategories(cats => [...cats, 'HunterXHunter']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                //React necesita que para cada elemento se identifique su key
                categories.map(category =>(
                    <GifGrid 
                        key={category}
                        category={category}
                    />))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;