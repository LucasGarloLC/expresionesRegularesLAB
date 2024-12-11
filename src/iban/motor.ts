import { banks } from "./data";
import { Account } from "./model";
import { validateIBAN } from "ibantools";

const checkIbanFormat = (iban: string): boolean => {
  const ibanRegex = /ES\d{2}[- ]?\d{4}[- ]?\d{4}[- ]?\d{2}[- ]?\d{10}/g;
  return ibanRegex.test(iban);
};

export const checkIbanValidation = (iban: string): boolean => {
  const isValidFormat = checkIbanFormat(iban);
  if (!isValidFormat) {
    return false;
  }
  return validateIBAN(iban).valid;
};

const getBankName = (id: string) => {
  const bank = banks.find((b) => b.id === id);
  return bank ? bank.name : "No encontrado";
};

export const bankValidation = (iban: string): Account => {
  let account: Account = {
    bank: "No encontrado",
    officeCode: "No encontrado",
    controlDigit: "No encontrado",
    id: "No encontrado",
  };

  const regex =
    /^[A-Z]{2}\d{2}(\s|-)?(?<bank>\d{4})(\s|-)?(?<officeCode>\d{4})(\s|-)?(?<controlDigit>\d{2})(\s|-)?(?<id>\d{10})$/;
  const isValid = regex.exec(iban);

  if (isValid) {
    const { bank, officeCode, controlDigit, id } = isValid.groups as any;
    getBankName(bank);
    account.officeCode = officeCode;
    account.controlDigit = controlDigit;
    account.id = id;
  }
  return account;
};
