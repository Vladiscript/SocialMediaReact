import React from 'react';
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import MessageForm from './MessageForm/MessageForm'
import Message from './Message/Message'
import { sendMessageAC } from '../../redux/messsages-reducer';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'



const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items} >
                {dialogsElements}
                <MessageForm sendMessage={props.sendMessage} />
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageAC(text))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

