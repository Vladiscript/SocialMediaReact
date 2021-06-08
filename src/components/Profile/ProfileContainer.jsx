import React from 'react'
import { connect } from 'react-redux'
import { addPost, setProfile, toggleFetching, getProfileThunk, updateStatusThunk, getStatusThunk, setPhotoThunk } from '../../redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUser
            if (!userId) { this.props.history.push('/login') }
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}
            updateStatus={this.props.updateStatusThunk}
            status={this.props.status} setPhoto={this.props.setPhotoThunk}
            isOwner={!this.props.match.params.userId} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        autorizedUser: state.auth.userId
    }
}

export default compose(connect(mapStateToProps, { addPost, setProfile, toggleFetching, getProfileThunk, updateStatusThunk, getStatusThunk, setPhotoThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

