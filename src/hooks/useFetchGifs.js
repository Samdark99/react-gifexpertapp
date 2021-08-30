import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //El useEffect hace que el código se ejecute una sola vez
    //sabiendo que cada que se actualiza el estado se prerenderiza todo
    useEffect(() => {
        getGifs(category)
            .then(images => setState({
                data: images,
                loading: false
            }));
    },[category]); //Esto hace que se vuelva a ejecutar el código del effect*/

    return state;
};

export default useFetchGifs;