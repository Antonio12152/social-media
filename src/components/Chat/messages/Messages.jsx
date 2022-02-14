import avatar from "../../../img/profile.jpg"
import classes from "../Chat.module.scss"
const Messages = (props) => {
    return (
        <div>
            <div className={classes.ava}>
                <img src={avatar} alt="" />
            </div>
            <div>
                <span>{props.name}</span>
                <p>{props.message}</p>
            </div>
        </div>
    )
}
export default Messages