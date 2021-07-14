import s from './ProfileInfo.module.css'
import React from 'react'


const ProfileData = ({ profile, goToEditMode, isOwner }) => {

    console.log(profile);
    return <div>
        <div>
            <b>fullName:</b>{profile.fullName}
        </div>
        <div>
            <b>lookingForAJob:</b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>lookingForAJobDescription:</b>{profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me:</b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>{Object.keys(profile.contacts).map(key => <div key={key}><b>{key}:</b> <div>{profile.contacts[key]}</div> </div>)}
        </div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
}

export default ProfileData;