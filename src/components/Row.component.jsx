import React from 'react';
import Cell from "./Cell.jsx";

export default function Row(props) {
    const cells = [];
    const {y,rowData} = props;
    for (let x = 0; x < props.x; x += 1) {
        cells.push(
            <Cell
                key={`${x}-${y}`}
                y={y}
                x={x}
                onChangedValue={props.handleChangeCell}
                value={rowData[x]}
                setType={props.setType}
            />
        )
    }
    return (
        <div>
            {cells}
        </div>
    )
}