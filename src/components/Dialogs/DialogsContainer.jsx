import { connect } from 'react-redux'
import { sendMessageCreator, upNewTextMCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withAuthNavigate from '../../hoc/AuthNavigate'
import { compose } from 'redux'


let mapStateToProps = (state) =>{
    return {
     dialogsObj: state.dialogsObj
    }
}
let mapDispatchToProps  = (dispatch) =>{
    return {
        upNewTextM: (text)=> {
             dispatch(upNewTextMCreator(text))
        },
        sendMessage: ()=> {
            dispatch(sendMessageCreator())
        }
        
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate 
) (Dialogs)