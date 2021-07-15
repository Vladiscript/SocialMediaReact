import React from 'react'
import { connect } from 'react-redux'
import { addPost, setProfile, toggleFetching, getProfileThunk, updateStatusThunk, getStatusThunk, setPhotoThunk, saveProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { useEffect } from 'react'


const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = props.autorizedUser
            if (!userId) { props.history.push('/login') }
        }
        props.getProfileThunk(userId)
        props.getStatusThunk(userId)
    }, [props.userId])

    return <Profile {...props} profile={props.profile}
        updateStatus={props.updateStatusThunk}
        status={props.status} setPhoto={props.setPhotoThunk}
        isOwner={!props.match.params.userId}
        saveProfile={props.saveProfile}
        profileInfo={props.profileInfo}
        error={props.error} addPost={props.addPost} posts={props.posts} />

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        autorizedUser: state.auth.userId,
        profileInfo: state.profilePage.profileInfo,
        posts: state.profilePage.posts,
        error: state.profilePage.error
    }
}

export default compose(connect(mapStateToProps, {
    addPost, setProfile, toggleFetching, getProfileThunk,
    updateStatusThunk, getStatusThunk, setPhotoThunk, saveProfile
}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

