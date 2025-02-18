'use client'
import { createPortal } from "react-dom"
import './Toast.scss'
import { useRef } from "react"
// import useToast from "./useToast"

export default function Toast({ ...props }) {
    const { message, type, state = 'close' } = props

    // const { toasts, addToast, removeToast } = useToast();

    const toast = useRef<any | undefined>(null)

    function dismiss(ref: any) {
        console.log(ref);
        ref.current.classList.remove('open');
        ref.current.classList.add('close');
    }

    return (
        <div ref={toast} className={["toast", type + "-toast", state].join(' ')}>
            <div className="toast-interior">
                {message}
            </div>

            <a className="toast-close" onClick={() => dismiss(toast)}>

            </a>
        </div>

    )
}
