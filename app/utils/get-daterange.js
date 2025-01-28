import { format, differenceInDays, addDays } from 'date-fns'

export const getDateRange = (startDate, endDate) => {
  const days = differenceInDays(endDate, startDate)

  return [...Array(days + 1).keys()].map(i => format(addDays(startDate, i), 'MM/dd/yyyy'))
}

export const generateAlphaNumeric = (length=10) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
