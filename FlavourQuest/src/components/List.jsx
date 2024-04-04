import { MdArrowOutward } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Pagination from "./Pagination";
import { useEffect, useRef } from "react";

const List = ({resultList, listTitle}) => {
    return(
        <div id="searchresult" className="flex flex-start flex-col items-left justify-center rounded-lg bg-green-500 m-10 h-full width-3/4 md:w-11/12 text-transparent/50">
                <div>
                    <p className="p-5 pb-10 text-lg sm:text-md md:text-6xl text-left font-bold w-1/4">{listTitle}</p>
                </div>
                <div className="text-sm md:text-5xl">
                    <ul className="p-10 pb-10 text-left font-bold">
                        {
                        resultList.map((result,index) => {
                            return(
                                <>
                                <div className="p-2 flex flex-row border-transparent/50 border-b-2">
                                    <li className="pr-5">{index+1}.</li>
                                    <li className="text-transparent/75 w-3/4">
                                         {result.title}
                                    </li>
                                    <li className="flex-wrap px-2 ml-auto">
                                        {/* <button className="px-2"><MdFavoriteBorder/></button>
                                        <button className="px-2"><MdContentPasteGo /></button> */}
                                        <button className="px-2"><MdArrowOutward/></button>
                                    </li>
                                </div>
                                </>
                            )
                        })
                        }
                    </ul>
                </div>
                {listTitle !="Recipes You May Like" > 0 && <Pagination />}
        </div>
    )
}
export default List;