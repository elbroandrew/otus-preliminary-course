/* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
export function checkEmail(email) {
  const regexp = new RegExp(/^[a-zA-Z.0-9_-]+@[a-z0-9]+\.[a-z]{2,3}$/g);
  return regexp.test(email);
}

export function checkDate(date) {
  const regexp = new RegExp(
    /(((19\d{2}|20[0-9]{2}))(\/|\.|-)(0?[1-9]|1[0-9]|2[0-9]|3[0-1])(\/|\.|-))(0[0-9]$|1[0-2]$|[0-9]$)/g
  );
  return regexp.test(date);
}

export function checkPhone(number) {
  const regexp = new RegExp(
    /((^\+[7])|(^[8]))((\d{10}$)|(([\s-]\d{3}){2}((([\s-]\d{2}){2})|(\s\d{4}))))/g
  );

  return regexp.test(number);
}
