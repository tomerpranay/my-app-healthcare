import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./loginoage.css"
import imgg from "../sideimage.png"
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [singup, setsingup] = useState(false)
    const navigate = useNavigate()
    const singuphandler = () => {
        setsingup(!singup);
    }
    const onButtonClick = () => {
        // You'll update this function later...
    }

    return (
        <div className='main-body'>
            {singup ?
                <div className={'mainContainer'}>
                    <div className={'titleContainer'}>
                        <div>SignUP</div>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(ev) => setEmail(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{passwordError}</label>
                    </div>

                    <br />

                    <div className={'inputContainer'}>
                        <input
                            value={password}
                            placeholder="Enter your Age here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                    <br />

                    <div className={'inputContainer'}>
                        
                        <select name="Gender" id="Gender">
                            <option >Male</option>
                            <option >Female</option>
                            
                        </select>
                        <label className="errorLabel">{passwordError}</label>
                    </div>

                    <div className={'inputContainer'}>
                        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
                    </div>
                    <h6 onClick={singuphandler}>Don't have an account?</h6>
                </div>
                :
                <div className={'mainContainer'}>
                    <div className={'titleContainer'}>
                        <div>Login</div>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(ev) => setEmail(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
                    </div>
                    <h6 onClick={singuphandler}>Don't have an account?</h6>
                </div>
            }

            <div>
                <img src={imgg} height={400} />
            </div>
        </div>
    )
}

export default Login