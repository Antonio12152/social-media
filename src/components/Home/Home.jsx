import axios from "axios"
import { useEffect } from "react"
import HomeUsers from "./HomeUsers"

const Home = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => props.getUsers(response.data))
        }
    }, [])
    const users = props.users.map((user) => {
        return (
            <HomeUsers follow={props.follow}
                key={user.id}
                name={user.name}
                company={user.company.name}
                followed={user.followed}
                id={user.id}
            />
        )
    })
    return (
        <div>
            {users}
        </div>
    )
}
export default Home