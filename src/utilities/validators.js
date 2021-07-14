import * as yup from 'yup';

export const required = (value) => (value ? undefined : 'Required')
export const maxLengthCreator = (maxValue) => (value) => (value.length > maxValue ? `Max length is ${maxValue} symbols` : undefined)


export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required')
});

export function validateUrl(values) {
    let error
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    if (!!pattern.test(values)) { return }
    else if (!values) { return }
    else {
        error = 'Invalid url address'
        return error
    }
}


export const textValidator = (min, max) => (values) => {
    const errors = {};
    if (values.text.length < min) {
        errors.text = `Minimal length of text is ${min} ${min === 1 ? 'symbol' : 'symbols'}`
    } else if (values.text.length > max) {
        errors.text = `Maximal length of text is ${max} symbols`
    }
    return errors
}