function dateValidator(date) {

  const splitedDate = date.split('T');
  const dt = splitedDate[0].split('-');
  const hr = splitedDate[1].split(':');

  const hour = hr[0];
  const minute = hr[1];

  const isBusinessDay = isWeekday(dt[0], dt[1], dt[2]);

  function isWeekday(year, month, day) {
    const dt = `${year}/${month}/${day}`;
    let isWeekday = new Date(dt).getDay();

    return isWeekday != 0 && isWeekday != 6;
  }

  const userDay = new Date(`${dt[0]}/${dt[1]}/${dt[2]}`).setHours(hour, minute);

  return ((hour <= 18 && hour >= 8)
     && (minute == 30 || minute == 0) && (isBusinessDay)&& (userDay > new Date())); 
  
}

export default dateValidator;