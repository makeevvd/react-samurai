import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength20 = maxLengthCreator(20);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                                         profileImg={d.profileImg}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>);


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    // if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                        <Field component={Textarea} name="newMessageBody" placeholder={"Enter your message"} validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;