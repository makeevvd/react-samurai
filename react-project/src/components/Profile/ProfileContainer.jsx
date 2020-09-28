import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {getAuthUserData} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getStatus(userId);
        this.props.getProfile(userId);
    }


    render() {



    return (

        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        authUserId: state.auth.userId,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getAuthUserData,
        getStatus,
        updateStatus
    }),
    withRouter,
    // withAuthRedirect,
    )(ProfileContainer)
