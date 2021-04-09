import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, postContent: 'Hello, everybody, I\'m a new user' },
        { id: 2, postContent: 'Go strave to Front-end with me' },

    ];

    let postElements = postData.map(p => <Post message={p.postContent} />)

    return (
        <div className={s.posts}>
            <div>
                <textarea className={s.textarea}></textarea>
                <button>Add post</button>
            </div>
            <span> My posts:</span>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
}

export default MyPosts;