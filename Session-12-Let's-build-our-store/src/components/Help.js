import { useState } from "react";
import { FAQ_LIST } from "../constants";

const Section = ({question,answer}) => {
    return <div>
        <h6>{question}</h6>
        <p>{answer}</p>
    </div>
}

const Help = () => {
    const [visibleSection, setIsVisibleSection] = useState(false);

    return <div className="bg-[#37718e] text-white px-5">
        <div className="text-3xl pt-16">Help & Support</div>
        <p>Let's take a step ahead and help you better.</p>
        <div className="m-8 bg-white text-black p-16">
            <h4 className="font-bold text-lg">FAQs</h4>
            {FAQ_LIST.map((data) => {
                return (
                    <Section
                        key={data?.q_id}
                        question={data?.question}
                        answer={data?.answer}
                        isVisible={visibleSection === 'about'}
                        setIsVisible={(e) => {
                            e ? setIsVisibleSection('about') : setIsVisibleSection(e)
                        }}
                    />
                )
            })}

        </div>
    </div>
}

export default Help;