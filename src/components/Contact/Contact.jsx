import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ContactContainer, ContactWrapper } from "./Contact.styled"

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h1mqpak', 'template_njg5ikd', form.current, '5AFXd7btz1LeSj7cP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <ContactContainer id="contact-us">
      <ContactWrapper>
        <h4>Contact me</h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input--field">
            <input type="text" name="user_name" placeholder="Name" required="required"/>
          </div>
          <div className="input--field">
            <input type="email" name="user_email" placeholder="Email" required="required"/>
          </div>
          <div className="input--field">
            <textarea name="message" placeholder="Message"/>
          </div>
          <input className="submit-btn" type="submit" value="Send"  required="required"/>
        </form>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact