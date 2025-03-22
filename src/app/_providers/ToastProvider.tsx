'use client'
import { ReactNode, useState } from "react";
import { ToastContext } from "../context/ToastContext";
import Toast from "../components/Toast/Toast";

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [type, setType] = useState<string | null>(null);

    const showToast = (message: string, type: string) => {
        setToastMessage(message);
        setType(type);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000); // Hide toast after 3 seconds
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toastMessage && (
                <Toast message={toastMessage} type={type} state='open'></Toast>
            )}
        </ToastContext.Provider>
    );
};