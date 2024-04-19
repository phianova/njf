"use client"
import React, { useState, useEffect } from 'react'

const FullPageModal = (props) => {
    const dataSource = props.source
    console.log(dataSource)
    const graphTitle = props.title
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="mb-30">
            <button onClick={handleClick}>{graphTitle}</button>
            {isOpen && dataSource &&
                <div className="fixed top-20 left-10 right-10 w-11/12 h-3/4 overflow-scroll z-6 bg-white border-2 border-colour-text flex justify-center items-center">
                    <object type="image/svg+xml" data={dataSource} className=""></object>
                    <button className="fixed top-24 right-20" onClick={handleClick}>Close</button>
                </div>
            }
        </div>
    )
}

export default FullPageModal