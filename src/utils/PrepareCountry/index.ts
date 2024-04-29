const prepareCountry = (value: string | undefined) => {
  if (!value) {
    return 'Воображляндия'
  }
  if (value === 'United States') {
    return 'USA'
  }
  if (value === 'United Kingdom') {
    return 'UK'
  }
  if (value === 'Japan') {
    return 'JP'
  }
  if (value === 'Germany') {
    return 'DEU'
  }
  if (value === 'France') {
    return 'FRA'
  }
  if (value === 'Canada') {
    return 'CAN'
  }

  return value
}
export default prepareCountry
