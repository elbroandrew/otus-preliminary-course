export function minutesPassed(todayDate) {
  return todayDate.getHours() * 60 + todayDate.getMinutes();
}

export function compareDates(date1, date2) {
  if (date1 - date2 < 0) {
    return "person1 is older";
  } if (date1 - date2 > 0) {
    return "person2 is older";
  } 
return "they are peers";
}
