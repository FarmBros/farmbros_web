import React from 'react'
import './FarmBrosInput.scss'

type Props = {
    "label": string,
    "placeholder": string
}

const FarmBrosInput = (props: Props) => {
    return (
        <div className='FarmBrosInput'>
            <label>
                {props.label}
                <input type="text" placeholder={`
            Enter ${props.placeholder}
        `} />
            </label>
        </div>
    )
}

export default FarmBrosInput