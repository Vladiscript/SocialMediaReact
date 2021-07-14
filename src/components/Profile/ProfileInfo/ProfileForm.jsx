import s from './ProfileInfo.module.css'
import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { Textarea } from '../../common/Preloader/FormControl/FormControl'
import { validateUrl } from '../../../utilities/validators'




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
                        <div>
                            <b>Full name:</b>
                            <Field type={'text'} name={'fullName'} validate={(value) => {
                                const error = 'Required'
                                if (!value) { return error }
                            }} />
                            <ErrorMessage name={'fullName'} component='div' />
                        </div>
                        <div>
                            <b>Looking for a job:</b>
                            <Field type={"checkbox"} name="lookingForAJob" />
                        </div>

                        <div>
                            <b>My professional skills:</b> <Textarea type={"text"} name="lookingForAJobDescription" />
                        </div>
                        <div>
                            <b>About me:</b> <Textarea type={"text"} name="aboutMe" />
                        </div>

                        <div>
                            <b>Contacts:</b>
                            {
                                Object.keys(profile.contacts).map(key => {
                                    return (<div key={key}>
                                        <b>{key}</b>:
                                        <Field type={'text'} name={'contacts.' + key} placeholder={key} validate={validateUrl} />
                                        <ErrorMessage name={'contacts.' + key} component='div' />
                                    </div>)
                                })
                            }

                            <button type="submit" disabled={isSubmitting}>
                                Save
                            </button>
                            <button onClick={leaveEditMode} >
                                Cancel
                            </button>

                        </div>

                    </Form>
                )
            }}
        </Formik>
    )

}

export default ProfileForm;