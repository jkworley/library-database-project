"use client";

import { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Modal = ({ children }: { children: ReactNode }) => {
    const overlay = useRef<HTMLElement>(null)
    const wrapper = useRef<HTMLElement>(null)
    const router = useRouter()

    const closeModal = useCallback(() => {
        router.push("/")
    }, [router])

    const handleClick = useCallback((e: React.MouseEvent) => {
        if(e.target === overlay.current && closeModal) {
            closeModal()
        }
    }, [closeModal, overlay])
    
    return (
        <div ref={overlay} className="modal" onClick={handleClick}>
            <button
                type="button"
                onClick={closeModal}
                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
            >
                <Image 
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                />
            </button>
            <div ref={wrapper} className="modal_wrapper">
                {children}
            </div>
        </div>
    ) 
}

export default Modal