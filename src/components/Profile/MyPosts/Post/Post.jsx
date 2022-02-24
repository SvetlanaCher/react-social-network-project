import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (  
        <div className={style.item}>
            <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            {props.message}
            <div>
                <span>{props.likesCounts} likes</span>
            </div>
        </div>
    )
}

export default Post
