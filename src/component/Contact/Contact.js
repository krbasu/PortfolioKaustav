import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { themeContext } from "../../Context";
import validator from "validator";

const Contact = () => {
  const form = useRef();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [Done, setDone] = useState("invalid");
  const [Fields, setFields] = useState({ user: "", mail: "", msg: "" });
  const clear = (event) => {
    setFields({ ...Fields, [event.target.name]: event.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (validator.isEmail(Fields.mail)) {
      emailjs
        .sendForm(
          "service_uqwqo7k",
          "template_h689kl7",
          form.current,
          "bxQgI47wnaAjr2Ifu"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFields({ user: "", mail: "", msg: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setDone(false);
    }
  };

  return (
    <div className='contact-form' id='Contact'>
      <div className='w-left'>
        <div className='span'>
          <div className='awesome'>
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact Me</span>
            <div
              className='blur s-blur1'
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className='c-right'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              required
              onChange={clear}
              type='text'
              name='user'
              value={Fields.user}
              className='user'
              placeholder='Name'
            />
            <input
              required
              type='email'
              name='mail'
              className='user'
              value={Fields.mail}
              placeholder='Email'
              onChange={clear}
            />
            <textarea
              required
              onChange={clear}
              name='msg'
              className='user'
              value={Fields.msg}
              placeholder='Message'
            />
            <input type='submit' value='Send' className='button' />
            <span>
              {Done === true ? (
                "Thanks for contacting me"
              ) : Done === false ? (
                <h3 style={{ color: "red" }}>Email format is not right</h3>
              ) : (
                ""
              )}
            </span>
            <div
              className='blur c-blur1'
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
