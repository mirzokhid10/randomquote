import React, {useState} from "react";
import {data} from "../data"

const QuoaraApp = () => {

    const [quote, setNewQuote] = useState(0)
    
    const randomQuote = () => {
        let random = Math.floor(Math.random()*data.length)
        setNewQuote(random)
    }

    return <>
        <section className="flex justify-center items-center w-1/3 h-1/3 bg-white rounded-lg">
            <div className="flex flex-col p-6 gap-8">
                <div className="text-center h-3/4">
                    <h3>{data[quote].quote}</h3>
                    <p>{data[quote].author}</p>
                </div>
                <div className="text-center h-1/4">
                    <button className="border-blue-500 text-blue-500 border-2 rounded-lg p-2" onClick={randomQuote}>Click here!</button>
                </div>
            </div>
        </section>    
    </>
}

export default QuoaraApp;