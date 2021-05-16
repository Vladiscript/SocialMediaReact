import React from 'react'
import { connect } from 'react-redux'
import { addPost, updatePost, setProfile, toggleFetching, getProfileThunk, updateStatusThunk, getStatusThunk } from '../../redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 16816
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatusThunk} status={this.props.status} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, { addPost, updatePost, setProfile, toggleFetching, getProfileThunk, updateStatusThunk, getStatusThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

