'use client'
// ToastContext.tsx
import { createContext } from 'react';


interface ToastContextProps {
    showToast: (message: string, type: string) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);



