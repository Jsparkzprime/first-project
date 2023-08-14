 function LoginInput() {
    return(
        <div>
            <form>
                <div className="my-3 py-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-light text-start">Email address</label>
                    <input type={'email'} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text text-start">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light text-start">Password</label>
                        <input type={"password"} className="form-control" id="exampleInputPassword1"/>
                        <div id="passwordHelpBlock" className="form-text text-start">
                         Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                    <input type={"checkbox"} className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label text-light text-start"          htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary text-light text-start">Submit</button>
                    </form>
        </div>
    )
}
export default LoginInput