/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Speedometer from "../components/Speedometer";



function Result() {
    
    const searchParams = new URLSearchParams(window.location.search);
    const result = searchParams.get("result");  
    const interestRate = searchParams.get("interestRate");
  
    console.log(result)

    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-700 to-sky-700 ">
        <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll">
          <div className="flex justify-end px-2 w-full">
            <img
              src="../public/tvs.png"
              alt=""
              className="object-contain h-20 w-64"
            />
          </div>
          <div className="mt-10">
            <Speedometer speed={result} />
          </div>
          <div>
            {result <= 40 && (
              <h2 className="font-inter font-bold text-2xl tracking-wide">
                We are pleased to share the results of our credit risk
                assessment. Based on our analysis, you exhibit a very low credit
                risk, indicating your eligibility for a loan. Should you choose
                to apply, you can be considered for a loan with the favorable
                standard 6% interest rate. We appreciate your responsible
                financial behavior and welcome any inquiries or applications you
                may have.
              </h2>
            )}

            {result > 40 && result < 70 && (
              <h2 className="font-inter font-bold text-3xl tracking-wide">
                Additional interest
              </h2>
            )}

            {result >= 70 && (
              <h2 className="font-inter font-bold tracking-wide text-2xl">
                You incur a high risk percentage. please consult a bank!
              </h2>
            )}
          </div>
        </div>
      </div>
    );
}

export default Result;
