import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className="box">
            <ProfileInfo />
            <MyPosts dispatch={props.dispatch} currentContent={props.profilePage.newPostText} profilePage={props.profilePage} />
        </div>
    )
}

export default Profile;