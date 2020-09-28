import React from "react";
import { Field, reduxForm } from 'redux-form'
import {login, logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsContros.module.css"

let maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'email'} component={Input} validate={[required, maxLength20]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength20]} type={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
        </div>
        {
            props.error &&
            <div className={styles.formError}>
                {props.error}
            </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}



const LoginReduxForm = compose(
    reduxForm({form: 'login'})
)(LoginForm)

let Login = (props) => {

    let onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
        <h1><a href='https://social-network.samuraijs.com/login'>Login</a></h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);