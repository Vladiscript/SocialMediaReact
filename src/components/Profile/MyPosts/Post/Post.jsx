import s from '../MyPosts.module.scss'

const Post = (props) => {

    return (
        <div className={s.posts__item}>
            {props.message}
        </div>
    )
}

export default Post;