import * as axios from 'axios'
import React, { Component } from 'react'
import Users from './Users'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,  toggleIsFetching, toggleFollowingProgress, getUsers } from './../../redux/usersReducer';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends Component {
    
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers
    }) (UsersContainer);