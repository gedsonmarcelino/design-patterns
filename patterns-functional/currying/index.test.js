const { formatDateLong, formatDateShort } = require("./utils/formatDate");

describe("Currying", () => {
  it('should return a long date format', () => {
    const date = new Date('2021-01-01T00:00:00');
    const result = formatDateLong(date);
    expect(result).toBe('1 de janeiro de 2021')
  });

  it('should return a short date format', () => {
    const date = new Date('2021-01-01T00:00:00');
    const result = formatDateShort(date);
    expect(result).toBe('01/01/2021')
  });
})