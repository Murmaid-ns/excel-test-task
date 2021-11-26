import React, {useState} from "react";
import {hot} from 'react-hot-loader/root';

import Table from "./components/Table.component.jsx"

const App = () => {
    const [type, setType] = useState();
    return (
        <div>
            <h1>{type}</h1>
            <div style={{width: 'max-content'}}>
                <Table x={10} y={10} setType={setType}/>
            </div>
        </div>
    );
}

export default hot(App);
