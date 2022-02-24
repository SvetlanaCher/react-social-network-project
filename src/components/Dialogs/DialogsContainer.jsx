import React from 'react'
import { updateNewMessageTextActionCreator,addMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer
