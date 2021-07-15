import { connect } from 'react-redux'
import Users from './Users';
import { followUser, unFollowUser, setCurrentPage, getUsersThunk, toggleFollowing, followThunk, unFollowThunk } from '../../redux/users-reducer';
import React from 'react'
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { useEffect, useMemo } from 'react';


const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsersThunk(props.currentPage, props.pageSize)
    }, [props.currentPage, props.pageSize])

    const onPageChange = (pageNumber) => {

        props.getUsersThunk(pageNumber, props.pageSize)
        props.setCurrentPage(pageNumber)
    }


    return <>
        {props.isFetching === true ? <Preloader /> : null}
        <Users
            users={props.users}
            totalUsers={props.totalUsers}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={onPageChange}
            followingProcess={props.followingProcess}
            follow={props.followThunk}
            unFollow={props.unFollowThunk} />
    </>

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


export default compose(connect(mapStateToProps, {
    followUser, unFollowUser,
    setCurrentPage, toggleFollowing, getUsersThunk, followThunk, unFollowThunk
}))(UsersContainer)


