import { useState } from "react";
import { FAQ_LIST } from "../constants";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";

const Section = ({ question, answer, isVisible,setIsVisible }) => {
    return <div className="border-b-2">
        {isVisible ?
            <button
                type="button"
                className="w-full text-[#3d4152] flex items-center justify-between py-4 text-lg hover:text-[#fc8019]"
                onClick={() => {
                    setIsVisible(false)
                }}><h2 className="">{question}</h2><RxChevronUp className="text-2xl" />
            </button> :
            <button
                type="button"
                className="w-full text-[#3d4152] flex items-center justify-between py-4 text-lg hover:text-[#fc8019]"
                onClick={() => {
                    setIsVisible(true)
                }}><h2 className="">{question}</h2><RxChevronDown className="text-2xl" />
            </button>
        }
        {isVisible && <p className="pb-6 text-[#686b78] text-sm">{answer}</p>}
    </div>
}

const Help = () => {
    const [visibleSection, setIsVisibleSection] = useState('q1');

    return <div className="bg-[#37718e] text-white px-5">
        <div className="text-3xl pt-16 pl-24 font-medium">Help & Support</div>
        <p className="pl-24 mb-8">Let's take a step ahead and help you better.</p>
        <div className="mx-8 bg-white text-black px-20 py-12">
            <h4 className="font-bold text-xl pb-4">FAQs</h4>
            {FAQ_LIST.map((data) => {
                return (
                    <Section
                        key={data?.q_id}
                        question={data?.question}
                        answer={data?.answer}
                        isVisible={visibleSection === data?.q_id}
                        setIsVisible={(e) => {
                            e ? setIsVisibleSection(data?.q_id) : setIsVisibleSection(e)
                        }}
                    />
                )
            })}

        </div>
    </div>
}

export default Help;