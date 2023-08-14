import { Link } from "react-router-dom"

function LandingPageOptions(){
    return(
        <div>
            <div className="d-flex flex-row m-3 p-3 justify-content-around">
            <button type="button" className="btn btn-outline-danger btn-large px-5 py-2 fw- " ><Link to={'accountant-login-page'}>ACCOUNTANT</Link></button>
            <button type="button" className="btn btn-outline-light btn-large px-5 py-2 "><Link to={'employee-login-page'}>EMPLOYEE</Link></button>   
            </div>
        </div>
    )
}

export default LandingPageOptions