import { banks } from "./data";
import { Account } from "./model";
import { validateIBAN } from "ibantools";
import { getIban, printBankData, printIbanFormat, printIbanValidation, resetBankData } from "./ui";

const checkIbanFormat = (iban: string): boolean => {
  const ibanRegex = /ES\d{2}[- ]?\d{4}[- ]?\d{4}[- ]?\d{2}[- ]?\d{10}/g;
  return ibanRegex.test(iban);
}

const checkIbanValidation = (iban: string): boolean => {
  return validateIBAN(iban).valid;
}

const getBankName = (id: string)  => {
  const bank = banks.find(b => b.id === id);
  return bank ? bank.name : "No encontrado";
}

const bankValidation = (iban : string) : Account  => {
  let account: Account = {
      bank: "No encontrado",
      officeCode: "No encontrado",
      controlDigit: "No encontrado",
      id: "No encontrado"
  }

  const regex =/^[A-Z]{2}\d{2}(\s|-)?(?<bank>\d{4})(\s|-)?(?<officeCode>\d{4})(\s|-)?(?<controlDigit>\d{2})(\s|-)?(?<id>\d{10})$/;
  const isValid = regex.exec(iban);

  if(isValid){
      const { bank , officeCode, controlDigit, id } = isValid.groups as any;
      getBankName(bank)
      account.officeCode = officeCode;
      account.controlDigit = controlDigit;
      account.id = id;
  }
  return account;
}

const resetIbanValidation = () => {
  const resultValidationElement = document.getElementById("validation");
  if(resultValidationElement instanceof HTMLElement){
    resultValidationElement.innerText = "";
  }
}

export const checkIban = () => {
  const iban = getIban();
  const isValidFormat = checkIbanFormat(iban);
  printIbanFormat(isValidFormat);
  if(isValidFormat){
    const isValid = checkIbanValidation(iban);
    printIbanValidation(isValid);
    if(isValid){
      const account = bankValidation(iban);
      printBankData(account)
    } else {
      resetBankData();
    }
  } else {
    resetIbanValidation();
    resetBankData();
  }
};
