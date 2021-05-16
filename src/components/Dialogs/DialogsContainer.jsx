import { sendMessageActionCreator, inputMessageActionCreator } from '../../redux/messsages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        inputMessage: (text) => {
            dispatch(inputMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)