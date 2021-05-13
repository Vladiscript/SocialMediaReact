import { connect } from 'react-redux'
import Users from './Users';
import { followUser, unFollowUser, setCurrentPage, getUsersThunk, toggleFollowing, followThunk, unFollowThunk } from '../../redux/users-reducer';
import React from 'react'
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {

        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        return <>
            { this.props.isFetching === true ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                followingProcess={this.props.followingProcess}
                follow={this.props.followThunk}
                unFollow={this.props.unFollowThunk} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        followingProcess: state.usersPage.followingProcess
    }
}


export default connect(mapStateToProps, {
    followUser, unFollowUser,
    setCurrentPage, toggleFollowing, getUsersThunk, followThunk, unFollowThunk
})(UsersContainer);
