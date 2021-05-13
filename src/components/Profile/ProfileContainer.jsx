import React from 'react'
import { connect } from 'react-redux'
import { addPost, updatePost, setProfile, toggleFetching, getProfileThunk } from '../../redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router'


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunk(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let RoutedProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updatePost, setProfile, toggleFetching, getProfileThunk })(RoutedProfileContainer);