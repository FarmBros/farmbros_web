import React from 'react'
import './FarmBrosButton.scss'

type Props = {
    title: string,
    icon: any,
    color: string,
    textColor: string
}

const FarmBrosButton = (props: Props) => {
    return (
        <button className='farmbros-button' style={{ backgroundColor: props.color, color: props.textColor }}>
            {props.icon}{props.title}
        </button>
    )
}

export default FarmBrosButton