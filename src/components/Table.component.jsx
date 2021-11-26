import React, {useState} from 'react';
import './table.style.scss';
import Row from './Row.component.jsx';

export default function Table(props) {
    let [state, setState] = useState({data: {}})
    let rows = [];
    const handleChangeCell = ({x, y}, value) => {
        const modifiedData = Object.assign({}, state.data)
        if (!modifiedData[y]) {
            modifiedData[y] = {};
        } else {
            modifiedData[y][x] = value;
            setState({data: modifiedData})
        }
    }

    for (let y = 0; y < props.y + 1; y += 1) {
        const rowData = state.data[y] || {};
        rows.push(<Row
            handleChangeCell={handleChangeCell}
            key={y}
            y={y}
            x={props.x}
            rowData={rowData}
        />)
    }
    return (
        <div>
            {rows}
        </div>
    )
}