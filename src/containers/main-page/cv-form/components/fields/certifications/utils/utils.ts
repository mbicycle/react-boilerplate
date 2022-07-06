export function ddmmyyyy(date: Date): string {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  return [`${(dd > 9 ? '' : '0') + dd}.${mm > 9 ? '' : '0'}${mm}.`, date.getFullYear()].join('');
}
