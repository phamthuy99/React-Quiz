import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify';
function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = async () => {
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>
            <div className="login-container">
                <div className="header">
                    <span>Don't have an account yet?</span>
                    <button onClick={() => navigate('/register')}>Signup</button>
                </div>
                <div className="title col-4 mx-auto">
                    React Quiz
                </div>
                <div className="welcome col-4 mx-auto">
                    Hello, who’s this?
                </div>
                <div className="content-form col-4 mx-auto">
                    <div className='form-group'>
                        <label >Email</label>
                        <input
                            style={{ fontWeight: 400 }}
                            placeholder='pnthuy@gmail.com'
                            type={'email'}
                            className='form-control'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            placeholder='Alt least 8 character'
                            type={'password'}
                            className='form-control'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <span className='forgot-password'>Forgot password ?</span>
                    <div>
                        <button
                            className='btn-submit'
                            onClick={() => handleLogin()}
                        >Login to React Quiz</button>
                    </div>
                </div>
            </div>
            <div className='primary-auth-container col-4 mx-auto'>
                <div className='auth-divider'>
                    <span className='auth-divider-text'>OR</span>
                </div>
                <div>
                    <button className="social-auth-button social-auth-google-button">Log in with Google...</button>
                </div>
                <div>
                    <button className="social-auth-button social-auth-microsoft-button">Log in with Microsoft</button>
                </div>
                <div className='btn-back-home'>
                    <span onClick={() => { navigate('/') }}>Go To Homepage</span>
                </div>

            </div>
        </>


    )
}
export default Login