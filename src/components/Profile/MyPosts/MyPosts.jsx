import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Formik, Form } from 'formik';
import { textValidator } from '../../../utilities/validators';
import { Textarea } from '../../common/Preloader/FormControl/FormControl';



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

    const submit = (values) => {

        if (values.text) {
            props.addPost(values.text)
        }
    }
    return (
        <div>
            <Formik
                initialValues={{ text: '' }}
                validate={textValidator(0, 70)}
                onSubmit={submit}
            >{(isValidating) => {
                return <Form>
                    <Textarea name={'text'} placeholder={'Enter your text'} />
                    <button type="submit" disabled={isValidating.errors.text}>
                        Send post
                    </button>
                </Form>
            }}

            </Formik>
        </div>

    )
}
export default MyPosts;