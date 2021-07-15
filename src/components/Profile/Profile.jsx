import Preloader from '../common/Preloader/Preloader';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div >
            <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} setPhoto={props.setPhoto}
                profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                profileInfo={props.profileInfo} error={props.error} posts={props.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile;