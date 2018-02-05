
export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const exactlyFiveChars = value => value.length === 5 ? undefined: 'Must contain exactly 5 characters';
export const mustBeNumber = value => typeof value === 'number' ? undefined: 'Must only contain numbers';
// Uses a regular expression (regex) to check whether it looks enough like an
// email address.  Broken down:
// ^ Matches the start the text
// \S+ Matches one or more non-whitespace characters before the @
// @ A literal at sign
// \S+ Matches one or more non-whitespace characters after the @
// $ Matches the end of the text
export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';