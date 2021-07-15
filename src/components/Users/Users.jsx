import React from 'react'
import userPhoto from '../../assets/images/images.png'
import Pagination from '../common/Pagination/Pagination'
import s from './Users.module.scss'

let Users = (props) => {

    return (
        <div className={s.users__body}>
            <div className={s.users__pagination}>
                <Pagination totalItems={props.totalUsers} pageSize={props.pageSize} onPageChange={props.onPageChange} currentPage={props.currentPage} />
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