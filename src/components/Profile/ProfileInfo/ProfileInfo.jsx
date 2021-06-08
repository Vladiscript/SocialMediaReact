import s from './ProfileInfo.module.css'
import React, { useState } from 'react'
import ProfileStatus from './ProfileStatus';
import avatar from '../../../assets/images/avatar.jpg'
import ProfileForm from './ProfileForm';

const ProfileInfo = ({ profile, setPhoto, updateStatus, status, isOwner }) => {

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false)

    const goToEditMode = () => setEditMode(true)
    const leaveEditMode = () => setEditMode(false)

    return <div>
        <div>
            <img className={s.img} src='https://img.freepik.com/free-photo/wide-cut-distant-shot-san-francisco-city-view-during-nighttime_181624-1755.jpg?size=626&ext=jpg&ga=GA1.2.855662366.1616889600' alt=' ' />
        </div>
        <div>
            <img className={s.avatar} src={profile.photos.large || avatar} alt=' ' />
            {isOwner && <input type='file' onChange={onPhotoSelected} accept='.png, .jpg' />}
            <ProfileStatus status={status} updateStatus={updateStatus} />
            {editMode ? <ProfileForm leaveEditMode={leaveEditMode} profile={profile} /> : <ProfileData profile={profile} goToEditMode={goToEditMode} isOwner={isOwner} />}
        </div>

    </div>

}

const Contact = ({ contactTitle, contactValue }) => {
    return <div>
        <b>{contactTitle}:</b>{contactValue}
    </div>
}

const ProfileData = ({ profile, goToEditMode, isOwner }) => {


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
            <b>Contacts</b>{Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={key[key]} />)}
        </div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
}

export default ProfileInfo;