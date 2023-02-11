// A function that formats a date
const formatDate = (dateFormat) => (date) => {
  const options = {
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    short: {}
  }

  return date.toLocaleDateString('pt-BR', options[dateFormat]);
}

// Currying the formatDate function
exports.formatDateLong = formatDate('long');
exports.formatDateShort = formatDate('short');