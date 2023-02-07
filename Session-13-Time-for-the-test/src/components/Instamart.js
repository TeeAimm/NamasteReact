import { useState } from "react"
import { LOREM_IPSUM_TEXT } from "../constants";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return <div className="border">
        {isVisible ?
            <button
                type="button"
                className="w-full flex items-center justify-between bg-gray-600 text-white p-4 text-lg"
                onClick={() => {
                    setIsVisible(false)
                }}><h2 className="font-bold">{title}</h2><RxChevronUp className="text-2xl" />
            </button> :
            <button
                type="button"
                className="w-full flex items-center justify-between bg-gray-600 text-white p-4 text-lg"
                onClick={() => {
                    setIsVisible(true)
                }}><h2 className="font-bold">{title}</h2><RxChevronDown className="text-2xl" />
            </button>
        }
        {isVisible && <p className="p-4">{description}</p>}
    </div>
}

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState('about')
    return <div className="mx-16">
        <h1 className="text-4xl mb-4">Instamart</h1>
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