import Messages from "./messages/Messages"
import classes from "./Chat.module.scss"
const Chat = (props) => {
    const messages = props.messages.map((message) => <Messages message={message.message} key={message.id} name={message.name}/>)
    return (
        <div>
            <ul>
                {messages}
            </ul>
        </div>
    )
}
export default Chat