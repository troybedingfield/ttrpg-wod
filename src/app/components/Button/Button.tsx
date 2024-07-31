'use client';

import './Button.scss'

export default function Button({ ...props }) {
    const {
        children,
        color = 'default',
        disabled,
        fill = 'solid',
        size = 'medium',
        uppercase,
        maxWidth,
        minWidth,
        customBGColor,
        buttonClick,
        formAction,
        classNames,
        minHeight
    } = props

    return (
        <button style={{ minWidth: minWidth + 'px', maxWidth: maxWidth + 'px', minHeight: minHeight + 'px' }} className={[color, fill, size, uppercase ? 'text-uppercase' : '', classNames].join(' ')} onClick={buttonClick}
            formAction={formAction} disabled={disabled ? disabled : null}>{children}</button>
    )
}