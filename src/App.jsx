import { Link } from "react-router-dom";

function App() {

  return (
    <div className="min-h-screen bg-[#F5F5F5] ">
      <div className="h-24 flex  items-center justify-between max-w-6xl mx-auto">
        <span className="p-4 flex items-center">
          <img
            src="../public/tvs.png"
            alt="tvs.png"
            className="object-fill h-14 w-72"
          />
        </span>

        <span>
          <img
            src="../public/sidelogo.jpg"
            alt="sidelogo.png"
            className="h-24 "
          />
        </span>
      </div>


      <div className = "border border-b border-slate-400 max-w-6xl mx-auto mt-2 mb-2 ">

      </div>

      <div className="flex justify-center items-center">
        <div className="">
          <img src="../public/leftimg.jpg" className="w-3/4 ml-16" />
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-sky-600 flex-1 rounded-lg mt-3 mr-10 flex flex-col items-center">
          <div className="flex justify-center ">
            <h2 className="text-4xl font-bold text-white tracking-widest p-4 mt-2">
              Credit Risk Evaluation
            </h2>
          </div>

          <div className="p-8 text-white">
            <p className="text-sm text-muted font-semibold">
              {" "}
              When you start the app it welcomes you with a ‘Get Words’ button
              that fetches 20 random words from api. After you click that button
              the app displays a loading spinner and shows the 20 fetched
              randomized words from the api when the loading stops. When the
              user starts typing in the input field, the timer and WPM start to
              work. At the end of 20 words, the game is over and the results are
              saved in Local Storage by storing Time and WPM data.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src="../public/speed.png" alt="" className="" />
            <div className="bg-gradient-to-br text-center pt-2  from-sky-300 to-green-500 h-10 w-32  rounded-full text-black font-bold">  
             <Link to="/form">
                Calculate Risk
              </Link>
            </div>
          </div>
          <div className="p-3">
            <p className="text-xs text-white font-semibold">
              When you start the app it welcomes you with a ‘Get Words’ button
              that fetches 20 random words from api. After you click that button
              the app displays a loading spinner and shows the 20 fetched
              randomized words from the api when the loading stops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

