import { Route, Routes } from "react-router-dom"
import UserProfile from "./UserProfile"
const Profile = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<UserProfile {...props} />} />
                <Route path=":id" element={<UserProfile {...props} />} />
            </Routes>
        </>
    )
}
export default Profile