import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Form, Field } from 'react-final-form'
import { Textarea } from '../../common/Preloader/FormControl/FormControl'



const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(p => <Post message={p.postContent} key={p.id} />)

    return (
        <div className={s.posts}>
            <AddPostForm addPost={props.addPost} />
            <span> My posts:</span>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
}
const AddPostForm = (props) => {
    const onSubmit = (values) => {
        console.log(values);
        let text = values.addpost
        if (text) {
            props.addPost(text)
        }
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field component={Textarea} name='addpost' className={s.textarea} />
                    <button type="submit">Add post</button>
                </form>
            )}
        />
    )
}
export default MyPosts;