import LandingPageOptions from "./landing-page-options"
function Home() {
    return (<div>
            <nav className="navbar bg-light shadow-lg border-success rounded-pill ">
                 <div className="container-fluid">
                    <span className="navbar-brand p-3 mb-4 text-success fs-3 fw-bold text-center ">WELCOME TO PAUL & SONS FINANCE</span>
                </div>
            </nav>

        <div className="p-3 m-3 fs-4 fw-bold text-light">LOG IN AS?</div>
        <LandingPageOptions/>
        </div>
        )
}

export default Home