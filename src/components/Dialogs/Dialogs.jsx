
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let state = props.dialogsObj 

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)


    let newMessageText = state.newMessageText;

    let onSendMessage = () =>{
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {

        let text = event.target.value;
        props.upNewTextM(text);
       
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

            {dialogsElements}

        </div>

        <div className={classes.messages}>

           <div> {messagesElements} </div> 

           <div>
               <div> <textarea onChange={onNewMessageChange} 
                               value={newMessageText} 
                               placeholder='Enter your message'>  </textarea> </div>
               <div> <button onClick={onSendMessage}>  Send   </button> </div>

           </div>

        </div>
    </div>

}


export default Dialogs