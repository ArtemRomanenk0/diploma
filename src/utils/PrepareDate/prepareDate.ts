const prepareDate = (value: string | undefined) => {
  return value ? value.slice(0, 4) : 'woops'
}
export default prepareDate
