import { Account } from "./model";
import { checkIban } from "./motor";

export const printBankData = (account: Account) => {
    const bankElement = document.getElementById("bank");
    const officeCodeElement = document.getElementById("office_code");
    const controlDigitElement = document.getElementById("control_digit");
    const idElement = document.getElementById("id")
    if(bankElement instanceof HTMLElement){
      bankElement.innerText = `Banco: ${account.bank}`;
    }
    if(officeCodeElement instanceof HTMLElement){
      officeCodeElement.innerText = `Código sucursal: ${account.officeCode}`;
    }
    if(controlDigitElement instanceof HTMLElement){
      controlDigitElement.innerText = `Dígito de control: ${account.controlDigit}`;
    }
    if(idElement instanceof HTMLElement){
      idElement.innerText = `Número de cuenta: ${account.id}`;
    }
}
  
export const resetBankData = () => {
    const bankElement = document.getElementById("bank");
    const officeCodeElement = document.getElementById("office_code");
    const controlDigitElement = document.getElementById("control_digit");
    const idElement = document.getElementById("id")
    if(bankElement instanceof HTMLElement){
      bankElement.innerText = "";
    }
    if(officeCodeElement instanceof HTMLElement){
      officeCodeElement.innerText = "";
    }
    if(controlDigitElement instanceof HTMLElement){
      controlDigitElement.innerText = "";
    }
    if(idElement instanceof HTMLElement){
      idElement.innerText = "";
    }
}

  
export const getIban = (): string => {
    return (document.getElementById("iban") as HTMLInputElement).value;
}
  
export const printIbanFormat = (result: boolean) => {
  const message = result ? "El código IBAN está bien formado" : "El código IBAN NO está bien formado";
  const resultElement = document.getElementById("format");
  if(resultElement instanceof HTMLElement){
    resultElement.innerText = message;
  }
}

export const printIbanValidation = (isValid: boolean) => {
  const messageValidation = isValid ? "El código IBAN es válido" : "El código IBAN NO es válido";
  const resultValidationElement = document.getElementById("validation");
  if(resultValidationElement instanceof HTMLElement){
    resultValidationElement.innerText = messageValidation;
  }
}

document.getElementById("check")?.addEventListener("click", checkIban);
