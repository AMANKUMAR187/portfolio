import styles from "./contact.module.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImageUrl } from "../../utils";


export const Contact  = () => {
   
    const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
        toast("Thanks for your Feedback!");

        emailjs.sendForm('service_ay9codb', 'template_cged695', form.current, {
            publicKey: 'A0LlNx14XLzDcPRmx',
          })
        console.log("hello")
          .then(
            () => {
               
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }; 
  


    return   <>
     <section className={styles.container} id="contact">
     <h2>Contact</h2>
      <hr/>        
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.4245452072123!2d85.3643835321101!3d23.9807809476452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49d00546c58f1%3A0xea6d444c927e75b!2sSurAj%20Medical!5e0!3m2!1sen!2sin!4v1719593775978!5m2!1sen!2sin"
       width="100%"
        height="150%"
         style={{ border:0}}
          allowFullScreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
        </iframe>
       <div className={styles.contact}>
       <form ref={form} onSubmit={sendEmail} 
        className={styles.contactform}>
         <input type='text' name='from_name' placeholder='User Name' autoComplete='off' required  id='contact-input'/>
         <input type='email' name='from_email' placeholder='xyz@gmail.com' autoComplete='off' required id='contact-input'/>
         <textarea name="message" cols={30} rows={6} placeholder='Please provide your Feedback' required id='contact-input'/>
         <input type='submit' value="send"/>
         <ToastContainer />
       </form>
       </div>
       <hr/>
      <ul className={styles.socialmedia}>
        <li>
        <a href="https://github.com/AMANKUMAR187" className={styles.icons}><img src={getImageUrl("contact/githubIcon.png")}/></a>
        </li>
        <li>
        <a href="#" className={styles.icons}><img src={getImageUrl("contact/emailIcon.png")}/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/aman-kumar-011a76221/" className={styles.icons}><img src={getImageUrl("contact/linkedinIcon.png")}/></a>
        </li>
        <li>
        <a href="https://www.instagram.com/aman_kumar187187/" className={styles.icons}><img src={getImageUrl("contact/instagram.png")}/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/aman-kumar-011a76221/" className={styles.icons}><img src={getImageUrl("contact/x.png")}/></a>
        </li>

      </ul>
     
    </section>
    </>
    
}