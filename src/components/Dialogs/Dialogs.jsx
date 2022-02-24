import React from 'react'
import { Redirect } from 'react-router-dom'
import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => 
        <DialogItem name={d.name} key={d.id} id={d.id} />)

        /* MESSAGES LOGIC */

    let messagesElements = props.messagesData.map( m => <Message message={m.message} key={m.id} />)

    let addMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

        /* END MESSAGES LOGIC */

    return (
        <div>
            <div className={style.dialogs}>
                <div className={`${style.dialogsItems} ${style.active}`}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <div>
                       <textarea 
                        placeholder='Enter your message'
                        value={props.newMessageText}
                        onChange={onMessageChange}
                       ></textarea> 
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
