import { useState } from "react"
import { LOREM_IPSUM_TEXT } from "../constants"

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return <div className="border p-4 my-5">
        <h2 className="font-bold">{title}</h2>
        {isVisible ?
            <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                    setIsVisible(false)
                }}>Hide</button> :
            <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                    setIsVisible(true)
                }}>Show</button>
        }
        {isVisible && <p className="transition-all">{description}</p>}
    </div>
}

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState('about')
    return <div className="mx-16">
        <h1 className="text-4xl">Instamart</h1>
        <Section
            title={"About Instamart"}
            description={LOREM_IPSUM_TEXT}
            isVisible={visibleSection === 'about'}
            setIsVisible={(e) => {
                e ? setIsVisibleSection('about') : setIsVisibleSection(e)
            }}
        />
        <Section
            title={"Team Instamart"}
            description={LOREM_IPSUM_TEXT}
            isVisible={visibleSection === 'team'}
            setIsVisible={(e) => {
                e ? setIsVisibleSection('team') : setIsVisibleSection(e)
            }}
        />
        <Section
            title={"Career at Instamart"}
            description={LOREM_IPSUM_TEXT}
            isVisible={visibleSection === 'career'}
            setIsVisible={(e) => {
                e ? setIsVisibleSection('career') : setIsVisibleSection(e)
            }}
        />
    </div>
}

export default Instamart