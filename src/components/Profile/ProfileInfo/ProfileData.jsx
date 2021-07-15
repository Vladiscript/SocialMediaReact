import React from 'react'
import s from '../Profile.module.scss'


const ProfileData = ({ profile, goToEditMode, isOwner }) => {
    return <div className={s.info__content}>
        <div className={s.info__item}>
            <b>fullName:</b>{profile.fullName}
        </div>
        <div className={s.info__item} >
            <b>Looking for a job:</b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div className={s.info__item}>
            <b>My professional skills:</b>{profile.lookingForAJobDescription}
        </div>
        <div className={s.info__item}>
            <b>About me:</b>{profile.aboutMe}
        </div>
        <div className={s.info__item}>
            <b>Contacts:</b>
            <div className={s.info__contacts}>{Object.keys(profile.contacts).map(key => <div className={s.contacts__item} key={key}><b>{key}:</b> {profile.contacts[key]}</div>)}</div>
        </div>
        <div className={s.edit__btn}>
            {isOwner && <button className={s.info__button} onClick={goToEditMode}>Edit</button>}
        </div>
    </div>
}

export default ProfileData;