import { validateCPF } from './validateCPF';

describe('validateCPF:', () => {
  it('should return valid cpf', () => {
    const cpf = '17929781704';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(true);
  });

  it('should return valid cpf with special caracters', () => {
    const cpf = '658.067.386-98';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(true);
  });

  it('should return valid cpf when rest of operation is below 2', () => {
    const cpf = '354.325.655-60';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(true);
  });

  it('should return valid cpf when pass with dots', () => {
    const cpf = '179.297.817-04';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(true);
  });

  it('should return valid cpf when pass with white space', () => {
    const cpf = '179 297 817 04';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(true);
  });

  it('should return invalid cpf', () => {
    const cpf = '01929781704';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(false);
  });

  it('should return invalid cpf when length to be more than 14', () => {
    const cpf = '179.297.817-04 ';
    const isValidCPF = validateCPF(cpf);
    expect(isValidCPF).toBe(false);
  });
});
