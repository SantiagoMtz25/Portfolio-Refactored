import './ContactMe.css'
import { useState } from 'react'

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNo, setContactNo] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");
  
  const handleSubmit = () => {
  
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setContactNo("");
    setMessage("");
  };

  return (
    <>
      <div className="background">
        <img className='wave2' src='public\assets\wave (6).svg' alt='wave' />
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">CONTACT INFO : santimtzv01@gmail.com</div>
              </div>
              <div className="screen-body-item">
                <form className="app-form" onSubmit={handleSubmit} action="">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT MOTIVE"
                      required
                      type="text"
                      value={contactNo || ''}
                      onChange={(e) => setContactNo(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      required
                      type="text"
                      value={message || ''}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" onClick={clearForm}>CLEAR</button>
                    <button className="app-form-button" type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img className='wave3' src='public\assets\wave (5).svg' alt='wave' />
      </div>
    </>
  );
}

export default ContactMe;