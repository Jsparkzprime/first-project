import Navbar from "../Navbar"
import LandingPageOptions from "./landing-page-options"
function Home() {
    return (<div>
        <Navbar TextNavbar="WELCOME TO PAUL & SONS FINANCE"/>
        <div className="p-3 m-3 fs-4 fw-bold text-light">LOG IN AS?</div>
        <LandingPageOptions/>
        </div>
        )
}

export default Home