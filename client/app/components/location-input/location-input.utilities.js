export const validate = value => {
  const regex = /^[a-zA-Z\s]*$/;
  const validValue = (value === '') || regex.test(value);
  return !!validValue;
};
