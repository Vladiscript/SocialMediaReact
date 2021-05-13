import React from 'react'
import userPhoto from '../../assets/images/images.png'
import s from './Users.module.css'

let Users = (props) => {

    let currentPages = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []


    for (let p = 1; p <= currentPages; p++) {
        pages.push(p)
    }
    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span className={s.pageNumber + ' ' + (props.currentPage === p && s.active)}
                        onClick={(e) => props.onPageChange(p)} key={p}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>


                    <div className={s.users}>
                        <div className={s.users__item}>
                            <div className={s.avatar}>
                                <div><img src={user.photos.small ? user.photos.small : userPhoto} alt="" /></div>
                                <div>
                                    {
                                        user.followed
                                            ? <button disabled={props.followingProcess.some(id => id === user.id)} onClick={() => {
                                                props.unFollow(user.id)
                                            }
                                            } className={s.follow_btn}>unFollow</button>
                                            : <button disabled={props.followingProcess.some(id => id === user.id)} onClick={() => {
                                                props.follow(user.id)
                                            }} className={s.follow_btn}>Follow</button>}
                                </div>
                            </div>
                            <div>
                                <div className={s.name}>{user.name}</div>
                                <div className={s.status}> {user.status}</div>
                            </div>
                            <div>
                                <div className={s.address}>{'user.address.country'} <br />{'props.city'}</div>
                            </div>

                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users