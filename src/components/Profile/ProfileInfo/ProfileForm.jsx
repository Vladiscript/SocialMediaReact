import s from './ProfileInfo.module.css'
import React from 'react'
import { Field, Form } from 'react-final-form';


const ProfileForm = ({ leaveEditMode, profile }) => {

    const onSubmit = () => {
        console.log('trt');
    }

    return (<Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <b>fullName:</b>
                    <div>
                        <Field placeholder={'placeholder'} component='input' name={'fullname'} />
                    </div>
                </div>
                <div>
                    <b>lookingForAJob:</b>
                </div>
                <div>
                    <Field placeholder={'placeholder'} component='input' type='checkbox' name={'Yes'} />Yes
                    <Field placeholder={'placeholder'} component='input' type='checkbox' name={'No'} />No
                </div>
                <div>
                    <b>lookingForAJobDescription:</b>
                </div>
                <div>
                    <Field placeholder={'placeholder'} component='input' name={'lookingForAJobDescription'} />
                </div>
                {/* <div>
                    <b>Contacts</b>{Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={key[key]} />)}
                </div> */}
                <div>
                    <button type="submit">Save</button>
                    <button onClick={leaveEditMode}>Cancel</button>
                </div>
            </form>
        )}
    />)

}

export default ProfileForm;