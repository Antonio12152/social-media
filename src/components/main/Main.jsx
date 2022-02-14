import { Route, Routes } from "react-router-dom"
import ChatHOC from "../Chat/ChatHOC"
import HomeHOC from "../Home/HomeHOC"
import ProfileHOC from "../Profile/ProfileHOC"

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomeHOC />} />
                <Route path="home" element={<HomeHOC />} />
                <Route path="chat" element={<ChatHOC />} />
                <Route path="profile/*" element={<ProfileHOC />} />
            </Routes>
        </main>
    )
}
export default Main