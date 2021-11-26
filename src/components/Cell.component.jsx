import React, {useState, useEffect} from 'react';
// import './cell.style.scss'

export default function Cell({x,y,onChangeValue,value}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [secValue, setValue] = useState(value);
    let prevent = false;
    // let display = value
    useEffect(() => {
        window.document.addEventListener('unselectAll', handleUnselectAll)
        window.document.removeEventListener('unselectAll', handleUnselectAll)
    })
    const onChange = (e) => {
        setValue({value: e.target.value})
    }

    const onKeyPressOnInput = (e) => {
        if (e.key === 'Enter') {
            hasNewValue(e.target.value)
        }
    }
    const onKeyPressOnSpan = () => {
        if (!this.state.editing) {
            setIsEditing({editing: true})
        }
    }
    const onBlur = (e) => {
        hasNewValue(e.target.value)
    }
    const handleUnselectAll = () => {
        if (isSelected || isEditing) {
            setIsEditing(false);
            setIsSelected(false);
        }
    }

    const hasNewValue = (value) => {
        onChangeValue(
            {
                x: x,
                y: y,
            },
            value,
        )
        setIsEditing(false);
    }
    const emitUnselectAllEvent = () => {
        const unselectAllEvent = new Event('unselectAll')
        window.document.dispatchEvent(unselectAllEvent)
    }
    const clicked = () => {
        // Prevent click and double click to conflict
        if (!this.prevent) {
            // Unselect all the other cells and set the current
            // Cell state to `selected`
            emitUnselectAllEvent()
            setIsSelected(true)
        }
        prevent = false
    }
    const doubleClicked = () => {
        prevent = true
        emitUnselectAllEvent()
        this.setState({editing: true, selected: true})
        setIsEditing(true);
        setIsSelected(true);
    }


    const calculateCss = () => {
        const css = {
            width: '80px',
            padding: '4px',
            margin: '0',
            height: '25px',
            boxSizing: 'border-box',
            position: 'relative',
            display: 'inline-block',
            color: 'black',
            border: '1px solid #cacaca',
            textAlign: 'left',
            verticalAlign: 'top',
            fontSize: '14px',
            lineHeight: '15px',
            overflow: 'hidden',
            fontFamily: 'Calibri, \'Segoe UI\', Thonburi, Arial, Verdana, sans-serif',
        }

        if (this.x === 0 || this.y === 0) {
            css.textAlign = 'center'
            css.backgroundColor = '#f0f0f0'
            css.fontWeight = 'bold'
        }

        return css
    }

    const css = calculateCss()

    if (x === 0) {
        return (
            <span style={css}>
                     {this.y}
                </span>
        )
    }

    if (y === 0) {
        const alpha = 'abcdefghijklmnopqrstuvw'.split('')
        return (
            <span
                onKeyPress={onKeyPressOnSpan}
                style={css}
                role="presentation">
          {alpha[x - 1]}
        </span>
        )
    }
    if (isSelected) {
        css.outlineColor = 'lightblue'
        css.outlineStyle = 'dotted'
    }

    if (isEditing) {
        return (
            <input
                style={css}
                type="text"
                onBlur={onBlur}
                onKeyPress={onKeyPressOnInput}
                value={value}
                onChange={onChange}
                autoFocus
            />
        )
    }
    return (
        <span className='cell' onClick={e => clicked(e)} onDoubleClick={e => doubleClicked(e)} style={css}
              role="presentation">
            {secValue}
        </span>
    )
}