import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className="box">
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer dispatch={props.dispatch} profilePage={props.profilePage} />
        </div>
    )
}

export default Profile;