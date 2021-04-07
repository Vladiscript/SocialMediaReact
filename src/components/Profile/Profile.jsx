import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img} src='https://img.freepik.com/free-photo/wide-cut-distant-shot-san-francisco-city-view-during-nighttime_181624-1755.jpg?size=626&ext=jpg&ga=GA1.2.855662366.1616889600' alt='' />
            </div>
            <div>
                ava
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;