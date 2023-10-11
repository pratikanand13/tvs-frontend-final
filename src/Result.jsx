/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Speedometer from "../components/Speedometer";


function Result() {


    const [result, setResult] = useState(50)
    
   
    useEffect(() => {
        async function getData() {
            const res = (await fetch("http://127.0.0.1:8000/tvsinfo/")).then(response => response.json()).catch(err => console.log(err));
            return res;
        }

        const res = getData();

        setResult(result);



    },[])



    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-700 to-sky-700 ">
            <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll">
                <div className = "flex justify-end px-2 w-full">
                    <img src="../public/tvs.png" alt="" className="object-contain h-20 w-64" />
                </div>
                <div className = "mt-10">

                <Speedometer speed={result} />
                </div>
                <div>

                {result <= 40 && <h2 className = "font-inter font-bold text-3xl tracking-wide">Congratulations! You are eligible for the loan.</h2>}
                
                {result > 40 && result < 70 && <h2 className = "font-inter font-bold text-3xl tracking-wide">Additional interest</h2>}
                
                {result>=70 &&  <h2 className = "font-inter font-bold tracking-wide text-2xl">You incur a high risk percentage. please consult a bank!</h2>}
                </div>
        </div>
      </div>
    );
}

export default Result;
