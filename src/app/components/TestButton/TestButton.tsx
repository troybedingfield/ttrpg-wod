import { useState } from 'react';
import Button from '../Button/Button'
import TestCodeBlock from '../TestCodeBlock/TestCodeBlock'
import './TestButton.scss'

export default function TestButton({ ...props }) {
    const { } = props

    const [userInput, setUserInput] = useState({
        Label: 'Button',
        Color: 'default',
        Fill: 'solid',
        Size: 'medium',
        Uppercase: false,
        Disabled: false
    });

    let codeString;

    console.log(userInput);

    function handleChange(e: any, inputIdentifier: string, newValue: any) {

        if (e.target.type === 'checkbox') {
            newValue = e.target.value = e.target.checked;
        }

        console.log(inputIdentifier, newValue)

        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }





    codeString = '<Button';

    if (userInput.Color != 'default') {
        codeString += ` color="${userInput.Color}"`;
    }
    if (userInput.Fill != 'solid') {
        codeString += ` fill="${userInput.Fill}"`;
    }
    if (userInput.Size != 'medium') {
        codeString += ` size="${userInput.Size}"`;
    }

    if (userInput.Uppercase) {
        codeString += ` uppercase="${userInput.Uppercase}"`;
    }

    if (userInput.Disabled) {
        codeString += ` disabled="${userInput.Disabled}"`;
    }


    codeString += '>';
    if (userInput.Label != '') {
        codeString += `${userInput.Label}`;
    }
    codeString += '</Button>';








    function onChange() {

    }

    return (
        <div className="test-container">

            <div className="test-button-two-column">

                <div className="column1">
                    <div className="form-container">

                        <div className="form-group">
                            <label >Label</label>
                            <input className="form-control" value={userInput.Label} onChange={(e) => handleChange(e, 'Label', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Color</label>
                            <select className="form-control" value={userInput.Color} onChange={(e) => handleChange(e, 'Color', e.target.value)}>
                                <option value="default">Default</option>
                                <option value="success">Success</option>
                                <option value="warning">Warning</option>
                                <option value="error">Error</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Fill</label>
                            <select className="form-control" value={userInput.Fill} onChange={(e) => handleChange(e, 'Fill', e.target.value)}>
                                <option value="solid">Solid</option>
                                <option value="outline">Outline</option>
                                <option value="clear">Clear</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Size</label>
                            <select className="form-control" value={userInput.Size} onChange={(e) => handleChange(e, 'Size', e.target.value)}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="toggle-switch">
                                <label className="switch">
                                    <input type="checkbox" checked={userInput.Uppercase} onChange={(e) => handleChange(e, 'Uppercase', e.target.value)} />
                                    <span className="slider round"></span>
                                </label>
                                Uppercase
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="toggle-switch">
                                <label className="switch">
                                    <input type="checkbox" checked={userInput.Disabled} onChange={(e) => handleChange(e, 'Disabled', e.target.value)} />
                                    <span className="slider round"></span>
                                </label>
                                Disabled
                            </div>
                        </div>
                    </div>

                </div>

                <div className="column2">
                    <div className="code-block-container">
                        <div>
                            <label>Test Button</label>

                            <Button color={userInput.Color} fill={userInput.Fill} size={userInput.Size} uppercase={userInput.Uppercase} disabled={userInput.Disabled}>{userInput.Label}</Button>
                        </div>
                        <div className="code-container">
                            <label className="margin-top25">Code</label>

                            <TestCodeBlock codestring={codeString} />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}