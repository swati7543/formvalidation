import { memo } from "react";

const Todos = ({ getadjective, adjective }) => {
    console.log("todos render");
    return (
        <>
            <h2>My {adjective} Todos</h2>

            <button onClick={getadjective()}> {getadjective()}</button>
        </>
    );
};

export default memo(Todos);