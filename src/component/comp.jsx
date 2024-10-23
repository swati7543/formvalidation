import { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from '../component/todo'
const Comp = () => {
    const [count, setCount] = useState(0);
    const [adjective, setAdjective] = useState('good')

    const getadjective = useCallback(() => {
        return "adjective" + count
            , [count]
    })


    return (
        <>
            <Todos adjective={"good"} getadjective={getadjective} />
            <hr />
            <div>
                Count: {count}
            </div>
            <button onClick={() => setCount((count) => count + 1)} >click</button>

        </>
    );
};

export default Comp