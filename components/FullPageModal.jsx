"use client"
import React, { useState, useEffect } from 'react'
import { FaArrowsAlt } from "react-icons/fa";

const FullPageModal = (props) => {
    const dataSource = props.source
    const graphTitle = props.title
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="mb-30">
            <button onClick={handleClick} className="text-3xl p-4 my-3 border-2 rounded-lg border-colour-text hover:bg-colour-text hover:text-colour-bg">View graph: {graphTitle}</button>
            {isOpen && dataSource &&
                <div className="fixed top-10 left-5 sm:top-20 sm:left-10 sm:right-10 w-11/12 h-5/6 sm:h-3/4 overflow-scroll z-6 bg-white border-2 border-colour-text">
                    <div className="flex flex-row w-full justify-end">
                    <div className="fixed mt-5 mx-auto w-11/12 text-center flex flex-row justify-center items-center p-5">
                        <p className="">Scroll to view graph</p>
                        <FaArrowsAlt className="m-3" />
                    </div>
                    <button className="fixed font-bold hover:text-colour-link p-3" onClick={handleClick}>Close</button>
                    </div>
                    <object type="image/svg+xml" data={dataSource} className="p-10"></object>
                </div>
            }
        </div>
    )
}

export default FullPageModal