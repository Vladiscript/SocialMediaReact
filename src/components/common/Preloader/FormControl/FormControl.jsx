import React from 'react'
import s from './FormControl.module.css'


export const Input = ({ input, meta, placeholder }) => {
    return <div>
        <input placeholder={placeholder}  {...input} className={(meta.error && meta.touched) ? s.error__border : ''} />
        {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
    </div>
}
export const Textarea = ({ props, meta }) => {
    return <div>
        <textarea placeholder='Enter a text' name='addpost' {...props} className={(meta.error && meta.touched) ? s.error__border : ''} />
        {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
    </div>
}