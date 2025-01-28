// ** Returns initials from string
export const getInitials = string => string?.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '').substring(0,2)

export const formatName = (input) => {
    // Convert input to string to handle non-string inputs
  const string = String(input);

  if (!string) return ''; // Handle empty string or null/undefined input

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
