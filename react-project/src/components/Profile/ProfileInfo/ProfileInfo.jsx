import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

let ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.profileImg} src={'https://bit.ly/3gQc42c'} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div>Меня зовут {profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <img src={profile.photos.small || 'https://bit.ly/3jdsp2D'} alt=""/>
                <div>
                    Ищу работу: {profile.lookingForAJob ? <img src={'https://bit.ly/2EWCfqK'}/> : <img src={'https://bit.ly/3gSAR5V'}/> }
                </div>
            </div>
        </div>
    )

}


export default ProfileInfo;