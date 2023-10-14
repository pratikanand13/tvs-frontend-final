import { useState } from "react";
import Popup from "../components/Popup";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";


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

    <>
      {formType === 0 && <Popup formType={formType } setFormType={setFormType} />}
      {formType === 1 && <Form1 formType={formType} setFormType={setFormType} formData={formData} setFormData={setFormData} />}
      {formType === 2 && <Form2 formType={formType} setFormType={setFormType} secondForm={secondForm} setSecondForm={setSecondForm} />}
      
    
    </>
   
  );
}

export default Form;
