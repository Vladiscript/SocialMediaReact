import React, { useEffect, useState } from 'react'
import s from '../Profile.module.scss'

const ProfileStatus = (props) => {

    const [editMode, setMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setMode(true)
    }
    const deactivateEditMode = () => {
        setMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={s.profile__status}>
        {
            editMode
                ?
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
                </div>
                :
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || '----'}</span>
                </div>
        }
    </div>

}

export default ProfileStatus