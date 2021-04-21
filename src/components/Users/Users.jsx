import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images.png'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items)
        })
    }


    return <div>
        {
            props.users.map(user => <div key={user.id}>


                <div className={s.users}>
                    <div className={s.users__item}>
                        <div className={s.avatar}>
                            <div><img src={user.photos.small ? user.photos.small : userPhoto} alt="" /></div>
                            <div>
                                {user.followed ? <button onClick={() => props.unFollowUser(user.id)} className={s.follow_btn}>unFollow</button> : <button onClick={() => props.followUser(user.id)} className={s.follow_btn}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div className={s.name}>{user.name}</div>
                            <div className={s.status}> {user.status}</div>
                        </div>
                        <div>
                            <div className={s.address}>{'user.address.country'} <br />{props.city}</div>
                        </div>

                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;