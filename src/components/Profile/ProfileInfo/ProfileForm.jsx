import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { Textarea } from '../../common/Forms/Forms'
import { validateUrl } from '../../../utilities/validators'
import s from '../Profile.module.scss'




const ProfileForm = ({ leaveEditMode, profile, saveProfile }) => {

    return (

        <Formik
            initialValues={profile}
            onSubmit={(values) => {
                saveProfile(values).then(() => leaveEditMode())
            }}>
            {({ isSubmitting }) => {
                return (
                    <Form>
                        <div className={s.info__item}>
                            <b>Full name:</b>
                            <Field type={'text'} name={'fullName'} validate={(value) => {
                                const error = 'Required'
                                if (!value) { return error }
                            }} />
                            <ErrorMessage name={'fullName'} component='div' />
                        </div>
                        <div className={s.info__item}>
                            <b>Looking for a job:</b>
                            <Field type={"checkbox"} name="lookingForAJob" />
                        </div>

                        <div className={s.info__item}>
                            <b>My professional skills:</b> <Textarea type={"text"} name="lookingForAJobDescription" />
                        </div>
                        <div className={s.info__item}>
                            <b>About me:</b> <Textarea type={"text"} name="aboutMe" />
                        </div>

                        <div className={s.info__item}>
                            <b>Contacts:</b>

                            {
                                Object.keys(profile.contacts).map(key => {
                                    return (<div key={key}>
                                        <div className={s.info__contats_items}>
                                            <b>{key}:</b>
                                            <Field className={s.info__contacts_inputs} type={'text'} name={'contacts.' + key} validate={validateUrl} />
                                            <ErrorMessage name={'contacts.' + key} component='div' />
                                        </div>
                                    </div>)
                                })
                            }

                            <div className={s.form__btns}>
                                <button type="submit" disabled={isSubmitting}>
                                    Save
                                </button>
                                <button onClick={leaveEditMode} >
                                    Cancel
                                </button>
                            </div>

                        </div>

                    </Form>
                )
            }}
        </Formik>
    )

}

export default ProfileForm;