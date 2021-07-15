import { Formik, Form } from 'formik';
import { textValidator } from '../../../utilities/validators';
import { Textarea } from '../../common/Forms/Forms';
import React from 'react'
import s from './MyPosts.module.scss'


const AddPostForm = (props) => {

    const submit = (values) => {

        if (values.text) {
            props.addPost(values.text)
        }
    }
    return (
        <div >
            <Formik
                initialValues={{ text: '' }}
                validate={textValidator(0, 70)}
                onSubmit={submit}
            >{(isValidating) => {
                return <Form className={s.post__form}>
                    <Textarea name={'text'} placeholder={'Enter your text'} />
                    <button className={s.post__btn} type="submit" disabled={isValidating.errors.text}>
                        Send post
                    </button>
                </Form>
            }}

            </Formik>
        </div>

    )
}

export default AddPostForm;