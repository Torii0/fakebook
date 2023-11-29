  import React, { useState} from 'react'
  import './LoginSignUp.css'


  import user_icon from '../Assets/user.png'
  import calendar_icon from '../Assets/calendar.png'
  import email_icon from '../Assets/email.png'
  import password_icon from '../Assets/lock.png'
  import openEye_icon from '../Assets/show.png'
  import closedEye_icon from '../Assets/eye.png'
  import FormInput from './FormInput.jsx'

  const LoginSignUp = () => {
      const [values, setValues] = useState({
      username: '',
      surname: '',
      birthday: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const [action,setAction] = useState("Rejestracja");
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const formFields = [
      { name: "email", placeholder: "Email", type: "text", icon: user_icon },
      { name: "password", placeholder: "Hasło",  type: showPassword ? "text" : "password", icon: password_icon},
    ];

    const registrationFields = [
      { name: "username", placeholder: "Imię", type: "text", icon: user_icon, text: "Imię", errorMessage: "Wypełnij pole imię"}, 
      { name: "surname", placeholder: "Nazwisko", type: "text", icon: user_icon, text: "Nazwisko",  errorMessage: "Wypełnij pole nazwisko" },
      { name: "birthday", placeholder: "Data urodzenia", type: "date", icon: calendar_icon, text: "Data urodzenia",  errorMessage: "Wypełnij pole data urodzenia"},
      { name: "email", placeholder: "Email", type: "text", icon: email_icon, text: "Email", errorMessage: "Niepoprawne email"},
      { name: "password", placeholder: "Hasło", type: showPassword ? "text" : "password", icon: password_icon, text: "Hasło", errorMessage: "", className: "password-input"},
      { name: "confirmPassword", placeholder: "Powtórz hasło", type: showConfirmPassword ? 'text' : 'password', icon: password_icon, text: "Potwierdzenie hasła", errorMessage: "Hasła nie pasują do siebie", className: "password-input" }

    ];


    const handleInputChange = (name, value) => {
      setValues(prevValues => ({
        ...prevValues,
        [name]: value
      }));
    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormSubmitted(true);
        const validationErrors = {}
      if(!values.username.trim()) {
          validationErrors.username = "Wypełnij pole imię"
      }

      if(!values.surname.trim()) {
        validationErrors.surname = "Wypełnij pole nazwisko"
    }

      if(!values.birthday.trim()) {
        validationErrors.birthday = "Wypełnij pole data urodzenia"
    }

      if(!values.email.trim()) {
          validationErrors.email = "Wypełnij pole email"
      } else if(!/\S+@\S+\.\S+/.test(values.email)){
          validationErrors.email = "Email jest nie poprawny"
      }

      if (!values.password.trim()) {
        validationErrors.password = "Wypełnij pole hasło";
    } else if (values.password.length < 6) {
        validationErrors.password = "Hasło ma się składać z co najmniej 6 znaków";
    } else if (!/[A-Z]/.test(values.password)) {
        validationErrors.password = "Hasło ma mieć co najmniej jedną dużą literę";
    } else if (!/\d/.test(values.password)) {
        validationErrors.password = "Hasło ma mieć co najmniej jedną liczbę";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
        validationErrors.password = "Hasło ma mieć co najmniej jeden znak specjalny";
    }
    

      if(values.confirmPassword !== values.password) {
          validationErrors.confirmPassword = "Podane hasło nie pasuje"
      }

      setErrors(validationErrors)

      if(Object.keys(validationErrors).length === 0) {
          alert("Form Submitted successfully")
      }
      };


    return (
      <div>
        <div className="fakebook-text">fakebook</div>
        <div className="container">
          <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="inputs">
          {(action === "Logowanie" ? formFields : registrationFields).map((field) => (
              <div key={field.name} className="input">
                <div className='tooltip'>
                  <div className='tooltiptext'>{field.text}</div>
                <img src={field.icon} width="30"/>
                </div>
                <FormInput
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={values[field.name]}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />

                  {(field.name === "password" && !errors[field.name]) ? (
                    <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <img src={openEye_icon} width="30" alt="Open Eye Icon" /> : <img src={closedEye_icon} width="30" alt="Closed Eye Icon" />}
                    </span>
                  ) : (
                    (field.name === "confirmPassword" && !errors[field.name]) ? (
                      <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <img src={openEye_icon} width="30" alt="Open Eye Icon" /> : <img src={closedEye_icon} width="30" alt="Closed Eye Icon" />}
                      </span>
                    ) : null
                  )}


                <div className={formSubmitted && errors[field.name] ? 'error' : 'input'}>
                  <div className={field.name}> {errors[field.name]} </div>
                </div>
              </div>
            ))}
              {action==="Logowanie"? <div className="submit-container"><button className='submit'>Zaloguj się</button></div>: <div className="submit-container"><button className='submit'>Zajerestruj się</button></div>}
          </div>
          {action==="Rejestracja"?<div></div>:
              <div className="forgot-password"><span>Zapomniałeś hasła?</span></div>}
        </form>
              <div className="submit-container">
                  <div className={action==="Logowanie"?"submit gray":"submit"} onClick={()=>{setAction("Rejestracja")}}>Rejestracja</div>
                  <div className={action==="Rejestracja"?"submit gray":"submit"} onClick={()=>{setAction("Logowanie")}}>Logowanie</div>
              </div>
        </div>
      </div>
    )
  }

  export default LoginSignUp
