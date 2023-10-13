import { useState } from "react";

import Form2 from "../components/Form2";
import Form1 from "../components/Form1";

function Form() {
  const [formType, setFormType] = useState(0);

  const [formData, setFormData] = useState({
    twelve_month_bounce_history: 0,
    maximum_mob: 0,
    bounced_while_repaying: 0,
    emi: 0,
    loan_amount: 0,
    tenure: 0,
    advance_emi_paid: 0,
    roi: 0,
    bounced_in_first_emi: 0,
    age: 0,
    total_loans_taken: 0,
    total_secured_loans: 0,
    total_unsecured_loans: 0,
    maximum_loan_sanctioned: 0,
    thirty_days: 0,
    sixty_days: 0,
    ninety_days: 0,
    dealer_code: 0,
    product_code: "",
    age_of_vehicle: 0,
    employment_type: "",
    resident_type: "",
    tier: 0,
    gender: "",
  });

  const [secondForm, setSecondForm] = useState({
    disbursed_amount: 0,
    asset_cost: 0,
    loan_to_value_ratio: 0,
    primary_disbursed_amount: 0,
    primary_current_balance: 0,
    primary_sanctioned_amount: 0,
    primary_overdue_accounts: 0,
    primary_active_accounts: 0,
    primary_number_of_accounts: 0,
    primary_installment_amount: 0,
    secondary_disbursed_amount: 0,
    secondary_current_balance: 0,
    secondary_sanctioned_amount: 0,
    secondary_overdue_accounts: 0,
    secondary_active_accounts: 0,
    secondary_number_of_accounts: 0,
    secondary_installment_amount: 0,
    perform_cns_score: 0,
    deliquent_accounts: 0,
    new_accounts: 0,
    number_of_inquiries: 0,
    employment_type: "",
  });

  return (
    <div className="min-h-screen overflow-hidden flex justify-center items-center bg-gradient-to-br from-emerald-700 to-sky-700">
      <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll overflow-x-hidden">
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
            <Form1 formData={formData} setFormData={setFormData} />
          </div>
        )}
        {formType === 2 && (
          <div className="">
            <Form2 secondForm={secondForm} setSecondForm={setSecondForm} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
