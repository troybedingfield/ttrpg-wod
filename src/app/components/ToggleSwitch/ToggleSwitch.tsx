'use client'
import './ToggleSwitch.scss'
import { useState } from "react"

export default function ToggleSwitch({ ...props }) {
    const {
        data,
        checked = false,
        children,
        change
    } = props

    const [isChecked, setIsChecked] = useState(checked);

    function handleChange(event: any) {

        console.log(event.target.checked)

        setIsChecked((isChecked: boolean) => !isChecked)
    }

    return (
        <div className="toggle-switch">
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={change} />
                <span className="slider round"></span>
            </label>
            {children}
        </div>
    )
}