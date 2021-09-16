import { useState } from "react";
import axios from "axios";
import uuid from "uuid";


function useFlip(initialState = true) {
    const [isFlipped, setFlipped] = useState(initialState);

    const flip = () => {
        setFlipped(flipUp => !flipUp)
    }

    return [isFlipped, flip]
}

function useAxios(url, addArgs) {
    const [response, setResponse] = useState([]);
    const [additionalArgs, setAdditionalArgs] = useState(addArgs)
    console.log(additionalArgs)
    console.log("hello")

    const getData = async () => {
        const res = await axios.get(url)
        console.log(res)
        setResponse(state => [...state, { ...res.data, id: uuid() }]);
    }
    const clearData = () => setResponse([]);

    return [response, getData, clearData]
}

export { useFlip, useAxios }