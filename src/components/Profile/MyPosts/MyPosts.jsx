import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(p => <Post message={p.postContent} />)


    let newPosstElement = React.createRef();

    const onAddPost = () => {
        let text = newPosstElement.current.value;
        if (text) {
            props.dispatch(addPostActionCreator())
        }
    }
    const changePost = () => {
        let text = newPosstElement.current.value;
        props.dispatch(updatePostActionCreator(text))
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={changePost} ref={newPosstElement} className={s.textarea} value={props.currentContent} />
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