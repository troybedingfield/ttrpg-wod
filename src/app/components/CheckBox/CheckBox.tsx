'use client'
import { useEffect, useRef, useState } from "react";
import './CheckBox.scss'

export default function CheckBox({ ...props }) {
    const { id, value, onChange, checked, indeterminate, data } = props
    const checkboxRef = useRef<any | undefined>();

    const CHECKBOX_STATES = {
        Checked: 'Checked',
        Indeterminate: 'Indeterminate',
        Empty: 'Empty',
    };

    let initialState = checked ? CHECKBOX_STATES.Checked : indeterminate ? CHECKBOX_STATES.Indeterminate : CHECKBOX_STATES.Empty

    const [isChecked, setIsChecked] = useState(initialState);

    const [checkChecked, setCheckChecked] = useState(checked)
    const [checkInd, setCheckInd] = useState(indeterminate)

    // console.log(checkChecked, checkInd);

    // checkboxRef.current.checked = checkChecked;
    // checkboxRef.current.indeterminate = checkInd;


    const handleChange = () => {
        let updatedChecked: any;

        if (isChecked === CHECKBOX_STATES.Checked) {
            updatedChecked = CHECKBOX_STATES.Empty;
        } else if (isChecked === CHECKBOX_STATES.Empty) {
            updatedChecked = CHECKBOX_STATES.Indeterminate;
        } else if (isChecked === CHECKBOX_STATES.Indeterminate) {
            updatedChecked = CHECKBOX_STATES.Checked;
        }

        setIsChecked(updatedChecked);
    };


    useEffect(() => {
        if (isChecked === CHECKBOX_STATES.Checked) {
            checkboxRef.current.checked = true;
            checkboxRef.current.indeterminate = false;
            setCheckChecked(true)
            setCheckInd(false)
        } else if (isChecked === CHECKBOX_STATES.Empty) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = false;
            setCheckChecked(false)
            setCheckInd(false)
        } else if (isChecked === CHECKBOX_STATES.Indeterminate) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = true;
            setCheckChecked(false)
            setCheckInd(true)
        }
    }, [isChecked, CHECKBOX_STATES.Checked, CHECKBOX_STATES.Empty, CHECKBOX_STATES.Indeterminate]);

    return (
        <div id="checkboxContainer">

            <input id={id} ref={checkboxRef} type="checkbox" onChange={handleChange} />
            <label htmlFor={id}></label>

        </div>
    );
}