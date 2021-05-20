

export const required = (value) => (value ? undefined : 'Required')
export const maxLengthCreator = (maxValue) => (value) => (value.length > maxValue ? `Max length is ${maxValue} symbols` : undefined)
