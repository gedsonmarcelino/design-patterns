import { formatDateLong, formatDateShort } from "./utils/formatDate";

// Using the curried formatDate functions
const date = new Date();
const longDate = formatDateLong(date);
const shortDate = formatDateShort(date);

console.log(longDate);
// Output: February 11, 2023

console.log(shortDate);
// Output: 2/11/2023