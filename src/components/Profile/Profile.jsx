import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className="box">
            <ProfileInfo />
            <MyPostsContainer dispatch={props.dispatch} profilePage={props.profilePage} />
        </div>
    )
}

export default Profile;