import React from 'react';
import Header from "./Header";
import {logout, setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose(
    withRouter,
    connect(mapStateToProps, {setUserData, logout})
)(HeaderContainer);