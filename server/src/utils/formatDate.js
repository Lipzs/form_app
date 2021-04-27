function formatDate(date) {
  if(date === undefined || date === '') {
    return;
  }

  const splitedDate = date.split('T');
  const dt = splitedDate[0].split('-');

  return `${dt[2]}/${dt[1]}/${dt[0]}`;
}

export default formatDate;