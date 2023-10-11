import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState(0);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-700 to-sky-700">
      <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll">
        <div className="flex mt-2 justify-end w-full mr-4 items-center mb-10">
          {/* <h2 className="font-bold font-inter p-2 text-slate-700 text-3xl uppercase tracking-widest">
            Risk Evaluation Form
          </h2> */}
          {formType != 0 && (
            <div className="flex justify-between px-1 w-full">
              <img
                src="../public/tvs.png"
                alt=""
                className="object-contain h-10 w-64"
              />
              <button
                onClick={() => setFormType(0)}
                className="h-10 bg-emerald-500 rounded-full w-24 font-bold font-inter text-white"
              >
                Back
              </button>
            </div>
          )}
        </div>

        {formType == 0 && (
          <div className="flex flex-col justify-center items-center mt-56">
            <div className="text-3xl font-inter font-bold">
              Are you an existing customer of TVS?
            </div>
            <div className="flex space-x-10 mt-10">
              <button
                onClick={() => setFormType(1)}
                className="bg-green-500 text-white h-10 w-44 rounded-full font-inter font-semibold"
              >
                YES
              </button>
              <button
                onClick={() => setFormType(2)}
                className="bg-red-500 text-white h-10 w-44 rounded-full font-inter font-semibold"
              >
                NO
              </button>
            </div>
          </div>
        )}
        {formType === 1 && (
          <div className="">
            <form
              action="/result"
              method="post"
              className=""
              onSubmit={() => navigate("/result")}
            >
              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Loan and Repayment Information
              </h2>
              <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                Borrowing and payment history data of the customer
              </p>
              <div className="border border-b-2 mb-7 border-black" />
              {/* First grid div*/}
              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                    12 months bounce history
                  </label>

                  <input
                    type="number"
                    name="1"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of times bounced"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Maximum MOB
                  </label>

                  <input
                    type="number"
                    name="2"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Monthly Outstanding Balance"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Bounced while repaying
                  </label>

                  <input
                    type="number"
                    name="3"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of times"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    EMI
                  </label>

                  <input
                    type="number"
                    name="4"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="EMI"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                    Loan Amount
                  </label>

                  <input
                    type="number"
                    name="5"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Total Loan Amount"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Tenure
                  </label>

                  <input
                    type="number"
                    name="6"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Tenure"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Advanced EMI Paid
                  </label>

                  <input
                    type="number"
                    name="7"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of times"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Rate of Interest
                  </label>

                  <input
                    type="number"
                    name="8"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Rate of Interest"
                  />
                </div>

                <div className="col-span-3 h-[2rem]" />
              </div>
              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Customer and Loan History
              </h2>
              <p className="ml-1 font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                Past loans data of the customer
              </p>
              <div className="border border-b-2 mb-7 border-black" />
              {/* First grid div*/}
              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <h2 className="font-semibold tracking-wide text-sm font-inter">
                    Bounced in first EMI
                  </h2>
                  <div className="ml-2 flex items-center justify-start space-x-4 h-10 w-60 border border-1 border-slate-800 rounded-lg">
                    <input
                      type="radio"
                      name="9"
                      required
                      className="border border-black ml-2 h-10  p-3 rounded-lg text-sm"
                    />
                    <label className="font-inter ">True</label>
                    <input
                      type="radio"
                      name="9"
                      required
                      checked
                      className="border border-black ml-2 h-10  p-3 rounded-lg text-sm"
                    />
                    <label className="font-inter ">False</label>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Age when loan taken
                  </label>

                  <input
                    type="number"
                    name="10"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Age"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Total loans taken
                  </label>

                  <input
                    type="number"
                    name="11"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of loans taken"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Total secured loans
                  </label>

                  <input
                    type="number"
                    name="12"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of secured loans"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Total unsecured loans
                  </label>

                  <input
                    type="number"
                    name="13"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of unsecured loans"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Maximum loan sanctioned
                  </label>

                  <input
                    type="number"
                    name="14"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="For a two-wheeler"
                  />
                </div>

                <div className="col-span-3 h-[2rem]" />
              </div>
              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Due history
              </h2>
              <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                Last 6 months passed due frequency of customer
              </p>
              <div className="border border-b-2 mb-7 border-black" />

              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    30 days
                  </label>

                  <input
                    type="number"
                    name="13"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of times"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    60 days
                  </label>

                  <input
                    type="number"
                    name="14"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of times"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    90 days
                  </label>

                  <input
                    type="number"
                    name="15"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of times"
                  />
                </div>
                <div className="col-span-3 h-[2rem]" />
              </div>

              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Two-wheeler and dealer information
              </h2>
              <p className="ml-1 font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                History of the two-wheeler vehicle purchased by customer
              </p>
              <div className="border border-b-2 mb-7 border-black" />

              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Dealer code
                  </label>

                  <input
                    type="number"
                    name="18"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="From whom you purchased"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Product code
                  </label>

                  <input
                    type="number"
                    name="19"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Product code"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Age of the vehicle
                  </label>

                  <input
                    type="number"
                    name="20"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Age of vehicle"
                  />
                </div>
                <div className="col-span-3 h-[2rem]" />
              </div>

              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Weight of Evidence
              </h2>
              <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                Small description of the group type here
              </p>
              <div className="border border-b-2 mb-3 border-black" />
              {/* First grid div*/}
              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Employment Type
                  </label>

                  <input
                    type="text"
                    name="21"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Salaried / Self-Employed"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Resident Type
                  </label>

                  <input
                    type="text"
                    name="22"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Resident Type"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Tier
                  </label>

                  <input
                    type="text"
                    name="23"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Tier"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Gender
                  </label>

                  <input
                    type="text"
                    name="24"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Male / Female / Other"
                  />
                </div>

                <div className="col-span-3 h-[2rem]" />
              </div>
              <div className="flex justify-center items-center p-3">
                <button
                  type="submit"
                  className="h-12  w-56 rounded-full bg-orange-400 text-white font-inter font-bold tracking-widest text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        {formType === 2 && (
          <div className="">
            <form
              action="/result"
              method="post"
              className=""
              onSubmit={() => navigate("/result")}
            >
              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Financial Information
              </h2>
              <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                Borrowing and payment history data of the customer
              </p>
              <div className="border border-b-2 mb-7 border-black" />
              {/* First grid div*/}
              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                    Disbursed Amount
                  </label>

                  <input
                    type="number"
                    name="1"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Disbursed Amount"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Asset cost
                  </label>

                  <input
                    type="number"
                    name="2"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Asset cost"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Loan to value ratio
                  </label>

                  <input
                    type="number"
                    name="3"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="LTV"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary disbursed amount
                  </label>

                  <input
                    type="number"
                    name="4"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="PDA"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary current balance
                  </label>

                  <input
                    type="number"
                    name="5"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Primary current balance"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary sanctioned amount
                  </label>

                  <input
                    type="number"
                    name="6"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="PSA"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary overdue accounts
                  </label>

                  <input
                    type="number"
                    name="7"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary active accounts
                  </label>

                  <input
                    type="number"
                    name="8"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Rate of Interest"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary number of accounts
                  </label>

                  <input
                    type="number"
                    name="9"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Primary installment accounts
                  </label>

                  <input
                    type="number"
                    name="10"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Secondary disbursed amount
                  </label>

                  <input
                    type="number"
                    name="11"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Secondary current balance
                  </label>

                  <input
                    type="number"
                    name="12"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Secondary sanctioned amount
                  </label>

                  <input
                    type="number"
                    name="13"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Secondary number of accounts
                  </label>

                  <input
                    type="number"
                    name="14"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Secondary active accounts
                  </label>

                  <input
                    type="number"
                    name="15"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Secondary installment accounts
                  </label>

                  <input
                    type="number"
                    name="16"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>

                <div className="col-span-3 h-[2rem]" />
              </div>
              <h2 className="text-3xl font-inter font-semibold text-gray-600">
                Credit and Score Information
              </h2>
              <p className="ml-1 font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
                Past loans data of the customer
              </p>
              <div className="border border-b-2 mb-7 border-black" />
              {/* First grid div*/}
              <div className="grid grid-cols-3 gap-x-20 gap-y-7">
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                   Perform CNS score
                  </label>

                  <input
                    type="number"
                    name="17"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Credit information bureau score"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Delinquent accounts
                  </label>

                  <input
                    type="number"
                    name="18"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="In last 6 months"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    New accounts
                  </label>

                  <input
                    type="number"
                    name="19"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="In last 6 months"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Number of inquiries
                  </label>

                  <input
                    type="number"
                    name="20"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Number of inquiries"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center">
                  <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                    Employment Type
                  </label>

                  <input
                    type="text"
                    name="21"
                    required
                    className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                    placeholder="Salaried / Self-Employment"
                  />
                </div>
                

                <div className="col-span-3 h-[2rem]" />
              </div>
             
              <div className="flex justify-center items-center p-3">
                <button
                  type="submit"
                  className="h-12  w-56 rounded-full bg-orange-400 text-white font-inter font-bold tracking-widest text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
