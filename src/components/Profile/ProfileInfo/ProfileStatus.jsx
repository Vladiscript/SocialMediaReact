import s from './ProfileInfo.module.css'
import React, { useEffect, useState } from 'react'

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


    return <>
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
    </>

}

export default ProfileStatus