type NavbarProps = {
    TextNavbar : string;
}

const Navbar : React.FunctionComponent<NavbarProps> =   ({TextNavbar}) => {

  
    return(
        <div>
            <nav className="navbar bg-danger shadow-lg border-light rounded-pill ">
                 <div className="container-fluid">
                    <span className="navbar-brand p-3 mb-4 text-white fs-3 fw-bold text-center ">{TextNavbar}</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar