// @ts-nocheck
const [MIN_CHARS, MAX_CHARS] = [11, 14];

function clearSpecialCharacters(value: string) {
  return value.replace(/[\s\.-]/g, '');
}

function getDigits(cpf: string) {
  return cpf.substring(9, 11);
}

function calculateDigit1(value: number) {
  const rest = value % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function calculateDigit2(digit1: number, digit2: number) {
  const rest = (digit2 + 2 * digit1) % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function calculateDigits(cpf: string) {
  let [digit1, digit2] = [0, 0];
  for (let index = 1; index < cpf.length - 1; index++) {
    let currentDigit = parseInt(cpf.substring(index - 1, index));
    digit1 = digit1 + (11 - index) * currentDigit;
    digit2 = digit2 + (12 - index) * currentDigit;
  }
  digit1 = calculateDigit1(digit1);
  digit2 = calculateDigit2(digit1, digit2);
  return `${digit1}${digit2}`;
}

export function validateCPF(cpf: string): boolean {
  if (cpf.length < MIN_CHARS || cpf.length > MAX_CHARS) return false;
  const cpfCleared = clearSpecialCharacters(cpf);
  const currentDigits = getDigits(cpfCleared);
  const calculatedDigits = calculateDigits(cpfCleared);
  return currentDigits === calculatedDigits;
}
