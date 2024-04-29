const prepareText = (value: string | undefined) => {
  return value
    ? value.replace(/(<([^>]+)>)/gi, '')
    : 'Где-то потерялось...'
}
export default prepareText
