import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    //
    // activateEditMode = () => {
    //     this.setState({editMode: true})
    //
    // }
    //
    // deactivateEditMode = () => {
    //     this.setState({editMode: false});
    //     this.props.updateStatus(this.state.status)
    // }
    //
    // onStatusChange = (e) => {
    //     // let status = e.currentTarget.value;
    //     this.setState({
    //         status: e.currentTarget.value
    //     });
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({status: this.props.status})
    //     }
    // }

    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])


       return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                </div>}
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>}

            </div>
       )

   }


export default ProfileStatusWithHooks;