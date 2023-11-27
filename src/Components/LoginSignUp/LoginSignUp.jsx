import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/user.png'
import calendar_icon from '../Assets/calendar.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/lock.png'
import openEye_icon from '../Assets/show.png'
import closedEye_icon from '../Assets/eye.png'

const LoginSignUp = () => {

  const [action,setAction] = useState("Rejestracja");
  return (
    <div>
      <div className="fakebook-text">fakebook</div>
      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>  
        <div className="inputs">
          {action==="Logowanie"?<div></div>:
          <div className="input">
                <img src={user_icon} alt="" width="30"/>
                <input type="text" placeholder='Imię'/>
              
                <img src={user_icon} alt="" width="30" />
                <input type="text" placeholder='Nazwisko'/>
                
            </div>
            }
          
            {action==="Logowanie"?<div></div>: 
            <div className="input">
            <div class="tooltip">
              <img src={calendar_icon} width="30" alt="" />
              <div class="tooltiptext">Data urodzenia</div>
              </div>
                <input value="1" type="number" id="day" name="day" width="10" min="1" max="31" required/>
                <select id="month" name="month" required>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input value="2023" type="number" id="year" name="year" min="1900" max="2023" required/>
            </div>
            }

            <div className="input">
                <img src={email_icon} alt="" width="30"/>
                <input type="email" placeholder='Email'/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" width="30"/>
                <input type="password" placeholder='Hasło'/>
            </div>

            {action==="Logowanie"?<div></div>:
            <div className="input">
               <img src={password_icon} alt="" width="30"/>
               <input type="password" placeholder='Powtórz hasło'/>
           </div>
        }
             {action==="Logowanie"? <div className="submit-container"><div className='submit'>Zaloguj się</div></div>: <div className="submit-container"><div className='submit'>Zajerestruj się</div></div>}
        </div>
        {action==="Rejestracja"?<div></div>:
            <div className="forgot-password"><span>Zapomniałeś hasła?</span></div>}
       
            <div className="submit-container">
                <div className={action==="Logowanie"?"submit gray":"submit"} onClick={()=>{setAction("Rejestracja")}}>Rejestracja</div>
                <div className={action==="Rejestracja"?"submit gray":"submit"} onClick={()=>{setAction("Logowanie")}}>Logowanie</div>
            </div>
      </div>
    </div>
  )
}

export default LoginSignUp
