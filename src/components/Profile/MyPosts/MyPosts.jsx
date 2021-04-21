import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(p => <Post message={p.postContent} key={p.id} />)


    let newPosstElement = React.createRef();

    const onAddPost = () => {
        let text = newPosstElement.current.value;
        if (text) {
            props.addPost()
        }
    }
    const changePost = () => {
        let text = newPosstElement.current.value;
        props.updatePost(text)
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={changePost} ref={newPosstElement} className={s.textarea} value={props.profilePage.newPostText} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <span> My posts:</span>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
}

export default MyPosts;