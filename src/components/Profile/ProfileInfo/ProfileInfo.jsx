import React from 'react'
import Preloader from '../../common/preloader/Preloader'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
    <div>
        <div className={style.image}>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
        </div>  
        <div className={style.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo
