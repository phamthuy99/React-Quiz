import { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import { postRegister } from '../../services/apiService'
import { toast } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate()


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        //validate
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid Email')
            return
        }

        if (!password) {
            toast.error('Invalid Password')
            return;
        }
        let data = await postRegister(username, email, password)

        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/login')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>
            <div className="register-container">
                <div className="header">
                    <span>Already have an account?</span>
                    <button onClick={() => navigate('/login')}>Log in</button>
                </div>
                <div className="title-main col-4 mx-auto">
                    React Quiz
                </div>
                <div className="title-sub col-4 mx-auto">
                    Get better data with conversational forms, surveys, quizzes & more.
                </div>

                <div className="content-form col-4 mx-auto">
                    <div className='form-input'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Name'
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className='form-input'>
                        <input
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='form-input pass-group'>
                        <input
                            className='form-control'
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span className='ic-eyes' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </span>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">I agree to ReactQuiz's Terms of Service, Privacy Policy and Data Processing Agreement.</label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className='btn-submit'
                            onClick={() => handleRegister()}
                        >Create my free account</button>
                    </div>
                    <div className='btn-back-home'>
                        <span onClick={() => { navigate('/') }}>Go To Homepage</span>
                    </div>
                </div>



            </div>
        </>
    )
}
export default Register