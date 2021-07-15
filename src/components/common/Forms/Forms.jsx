import React from 'react'
import s from './Forms.module.scss'
import { Field, ErrorMessage } from 'formik';

export const Input = ({ input, meta, placeholder }) => {
    return <div>
        <input placeholder={placeholder}  {...input} className={(meta.error && meta.touched) ? s.error__border : ''} />
        {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
    </div>
}

export const MyField = (props) => {
    return (
        <div>
            <label>
                {props.label}
                <Field type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} validate={props.validate} />
                <ErrorMessage name={props.name} component={props.component} />
            </label>

        </div>
    )
}


export const Textarea = (props) => {
    return (
        <div>
            <Field className={s.textarea} as={'textarea'} name={props.name} placeholder={props.placeholder} />
            <ErrorMessage className={s.error} name={props.name} component={'div'} />
        </div>
    )
}
