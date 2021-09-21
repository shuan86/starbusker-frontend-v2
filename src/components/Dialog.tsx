import React, { useEffect, useState } from 'react';
import "../public/css/dialog.css";
export const Dialog = ({ children, isOpen, setIsOpen }) => {
    return (
        <>
            {
                isOpen && (
                    <div className='s' onClick={(e: any) => {
                        if (e.target.className == 'dialog') {
                            setIsOpen(false)
                        }
                    }}>
                        <div className='dialog' >
                            {children}
                        </div >
                        <div className="dialog-background"
                        ></div>
                    </div >
                )
            }



        </>
    )
}