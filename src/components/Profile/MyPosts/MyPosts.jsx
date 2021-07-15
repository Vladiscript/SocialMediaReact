import React from 'react'
import AddPostForm from './AddPostForm'
import s from './MyPosts.module.scss'
import Post from './Post/Post'



const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.postContent} key={p.id} />)

    return (
        <div className={s.posts}>
            <div className={s.posts__form}>
                <div className={s.posts__title}>Posts:</div>
                <AddPostForm addPost={props.addPost} />
            </div>
            <div className={s.posts__items}>
                {postElements}
            </div>

        </div>
    )
}


export default MyPosts
