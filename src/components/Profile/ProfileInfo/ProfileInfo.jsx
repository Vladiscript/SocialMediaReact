import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.img} src='https://img.freepik.com/free-photo/wide-cut-distant-shot-san-francisco-city-view-during-nighttime_181624-1755.jpg?size=626&ext=jpg&ga=GA1.2.855662366.1616889600' alt='' />
            </div>
            <div>
                <img className={s.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPotiAkd2D5YGfmT33UhCXeny5A16AJ4NEg&usqp=CAU' />
            </div>
        </div>
    )
}

export default ProfileInfo;