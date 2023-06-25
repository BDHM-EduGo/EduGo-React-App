import './SignIn.css'
import google from './google.png';
import pic from './pic.png'

function SignIn() {
    return (
        <>
            <div className="main-con">
                <div className="main-con-in">
                    <div className="pic-con">
                        <img src={pic} alt="" />
                    </div>
                    <div className="form-con">
                        <a href="https:/www.google.com"><div className='logo'><img src={google} alt="" /><h3>Signup with Google</h3></div></a>
                        <div className="or">
                            <hr className='h1' /><h3 className='h2'> OR</h3><hr className='h1' />
                        </div>
                        <form>
                            <input type="text" name='name' placeholder="User Name" required />
                            <input type="password" name='password' placeholder="Password" required />
                            <button>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </ >
  )
}

export default SignIn
