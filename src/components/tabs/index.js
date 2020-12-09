import React from 'react'
import Tab from "../tab";


const Tabs = ({browsers, activeBrowser, choose, add, close}) => {
    return (
        <div className="tabs">
            {browsers.map((browser, index) => (
                <Tab key={index} isActive={activeBrowser === index} index={index} close={close}>
                    <button onClick={() => choose(index)}>{browser || 'new tab'}</button>
                </Tab>
            ))}
            <Tab>
                <button onClick={() => add()}>+</button>
            </Tab>
        </div>
    )
}

export default Tabs

