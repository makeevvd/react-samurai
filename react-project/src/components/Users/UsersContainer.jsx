import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getTotalUsers, requestUsers,
    setCurrentPage,
    setUsers,
    toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (selectedPage) => {
        this.props.setCurrentPage(selectedPage);
        this.props.getUsers(selectedPage, this.props.pageSize);
    }

    render() {

        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        users: getUsers(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setUsers,
            getTotalUsers,
            setCurrentPage,
            toggleIsFetching,
            getUsers: requestUsers,
            follow,
            unfollow
        }
    ),
    withAuthRedirect
)(UsersContainer)
