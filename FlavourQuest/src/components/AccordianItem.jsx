import { useState } from "react";

const AccordianItem = ({title,content}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return(
        <div className="flex flex-col text-wrap border-black border-b-2 p-2">
            <button className="flex justify-between text-3xl"
             onClick={() => setAccordionOpen(!accordionOpen)}
             > 
                <span>{title}</span>
                <span>+</span>
            </button>
            <div
             className={`text-left overflow-hidden flex flex-col p-1 transition-all duration-300 ease-in-out text-sm ${
                accordionOpen
                  ? "opacity-100 text-wrap"
                  : "max-h-0 opacity-0"
              }`}
            >
                <div className="flex flex-wrap flex-col gap-5 bg-gray-100/50 p-5">
                    {content?.map(element => {
                    return(
                    <>
                    <li>{element}</li>
                    </>
                )}
                    )}</div>
            </div>
        </div>
    )
}
export default AccordianItem;