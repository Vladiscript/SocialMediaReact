import s from './ProfileInfo.module.css'
import React, { useState } from 'react'
import ProfileStatus from './ProfileStatus';
import avatar from '../../../assets/images/avatar.jpg'
import ProfileForm from './ProfileForm';
import ProfileData from './ProfileData';


const ProfileInfo = ({ profile, setPhoto, updateStatus, status, isOwner, saveProfile, profileInfo, error }) => {

    console.log(profile);
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
            {editMode
                ? <ProfileForm error={error} profileInfo={profileInfo} saveProfile={saveProfile} leaveEditMode={leaveEditMode} profile={profile} />
                : <ProfileData profile={profile} goToEditMode={goToEditMode} isOwner={isOwner} />}
        </div>

    </div>

}

export default ProfileInfo;