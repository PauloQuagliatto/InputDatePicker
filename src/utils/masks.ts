import { FormEvent } from "react";

const cepMask = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");

  return value;
};

const dateMask = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 10;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3");

  return value;
};

const numberMask = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 8;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");

  return value;
};

export { cepMask, dateMask, numberMask };
