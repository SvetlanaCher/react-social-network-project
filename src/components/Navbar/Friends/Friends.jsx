import React, { Component } from 'react'
import style from './Friends.module.css'


const Friends = () => {
    return (
        <div>
            <h3>Friends</h3>
            <div className={style.friendsBlock}>
                <div className={style.friend}>
                    <img src='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <div>
                        Katya
                    </div>
                </div>
                <div className={style.friend}>
                    <img src='https://www.filmibeat.com/ph-big/2020/02/v-2020_158253142110.jpg' />
                    <div>
                        Kostya
                    </div>
                </div>
                <div className={style.friend}>
                    <img src='http://v.img.com.ua/b/600x500/7/07/cc91451a45a819622973720fb2082077.jpg' />
                    <div>
                        Sonya
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friends