import axios from "axios"
import { NavLink } from "react-router-dom"
import avatar from "../../img/profile.jpg"
import classes from "./Home.module.scss"
const HomeUsers = (props) => {
    const follow = (e, followed) => {
        e.target.disabled = true
        axios.put(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
            body: JSON.stringify({
                id: props.id,
                userId: props.id,
                followed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((user) => props.follow(user.id, user.followed))
            .then(() => e.target.disabled = false)
    }
    return (
        <div className={classes.home}>
            
            <div className={classes.home__ava}>
                <NavLink to={`/profile/${props.id}`}><img src={avatar} alt="" /></NavLink>
            </div>
            <div>
                <NavLink to={`/profile/${props.id}`}>{props.name}</NavLink><br />
                <span>{props.company}</span>
            </div>
            <div className={classes.home__button}>
                {props.followed ?
                    <button type="button" onClick={(e) => follow(e, false)}>Unfollow</button> :
                    <button type="button" onClick={(e) => follow(e, true)}>Follow</button>}
            </div>
        </div>
    )
}
export default HomeUsers