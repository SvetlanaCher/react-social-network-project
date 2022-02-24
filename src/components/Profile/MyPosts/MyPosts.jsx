import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    
    let postsElements = props.postsData.map(p => <Post message={p.message} key={p.id} likesCounts={p.likesCount}/>)

    let onAddPost = () => { 
        props.addPost();
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <div>
                <h3>
                    My post
                </h3>
                
                <div>
                    <div>
                       <textarea 
                        ref={newPostElement}
                        value={props.newPostText} 
                        onChange={onPostChange}
                       />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                    
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
