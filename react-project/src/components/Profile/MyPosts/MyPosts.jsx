import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength15 = maxLengthCreator(15);

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Write your message"} component={Textarea} name={"postText"} validate={[required, maxLength15]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddPostFormRedux = reduxForm({form: "postsAddMessageForm"})(AddPostForm);

let MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = (values) => {
        props.addPost(values.postText);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

MyPosts = React.memo(MyPosts)



export default MyPosts;