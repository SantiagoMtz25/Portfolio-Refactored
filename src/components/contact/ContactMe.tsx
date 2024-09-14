import "./ContactMe.css";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

interface SubmitContactForm {
  name: string;
  email: string;
  motive: string | null;
  message: string | null;
}

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [motive, setMotive] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDisabledSubmit(true);
    try {
      const serverUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post<SubmitContactForm>(`${serverUrl}/contact`, {
        name,
        email,
        motive,
        message,
      });
      console.log(response.data);
      clearForm();
    } catch (error) {
      console.error(error);
      toast.error("This service is down, please try again later or contact me directly at my email.");
    } finally {
      clearForm();
      setDisabledSubmit(false);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMotive("");
    setMessage("");
  };

  return (
    <>
      <div className="background">
        <img className="wave2" src="src\assets\wave (6).svg" alt="wave" />
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
                <div className="app-contact">
                  CONTACT INFO : santimtzv01@gmail.com
                </div>
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
                      value={motive || ""}
                      onChange={(e) => setMotive(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      required
                      type="text"
                      value={message || ""}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" onClick={clearForm}>
                      CLEAR
                    </button>
                    <button className="app-form-button" type="submit" disabled={disabledSubmit}>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img className="wave3" src="src\assets\wave (5).svg" alt="wave" />
        <Toaster 
          position="bottom-center"
          reverseOrder={false}
        />
      </div>
    </>
  );
};

export default ContactMe;
