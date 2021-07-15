import s from '../Profile.module.scss'
import React, { useState } from 'react'
import ProfileStatus from './ProfileStatus';
import avatar from '../../../assets/images/avatar.jpg'
import ProfileForm from './ProfileForm';
import ProfileData from './ProfileData';
import MyPosts from '.././MyPosts/MyPosts';



const ProfileInfo = ({ profile, setPhoto, updateStatus, status, isOwner, saveProfile, profileInfo, error, addPost, posts }) => {

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false)

    const goToEditMode = () => setEditMode(true)
    const leaveEditMode = () => setEditMode(false)

    return <div className={s.profile}>
        <div className={s.profile__header}>
            <div className={s.profile__background}>
                <img src='https://interier-foto.ru/wp-content/uploads/2015/11/ozero-dzhangyskol-6471.jpg' alt=' ' />
            </div>
            <div className={s.profile__avatar}>
                <div className={s.avatar__body} >
                    <img className={s.avatar} src={profile.photos.large || avatar} alt=' ' />
                    {isOwner &&
                        <div className={s.avatar__loader}>
                            <label className={s.avatar__label} htmlFor='ava'><img src="https://img.icons8.com/material-rounded/24/000000/camera--v2.png" /></label>
                            <input className={s.avatar__input} id='ava' type='file' onChange={onPhotoSelected} accept='.png, .jpg' />
                        </div>
                    }
                </div>
                <div className={s.avatar__name}>{profile.fullName}</div>

                <ProfileStatus status={status} updateStatus={updateStatus} />

            </div>
            <div className={s.line} ><div></div></div>
        </div>
        <div className={s.profile__body}>
            <div className={s.profile__info}>
                <div className={s.info__title}>Info:</div>
                <div className={s.info__body}>
                    {editMode
                        ? <ProfileForm error={error} profileInfo={profileInfo} saveProfile={saveProfile} leaveEditMode={leaveEditMode} profile={profile} />
                        : <ProfileData profile={profile} goToEditMode={goToEditMode} isOwner={isOwner} />}
                </div>
            </div>
            <div className={s.profile__posts}>
                <MyPosts addPost={addPost} posts={posts} />
            </div>
        </div>
    </div>

}

export default ProfileInfo;