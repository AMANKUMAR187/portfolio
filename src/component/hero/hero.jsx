import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './hero.module.css';


export const Hero = () => {
    return <section className={styles.container}>
        
        <div className={styles.content}> 
             <h1>Hi, I Am AMAN KUMAR</h1>
            <p className={styles.discription}>I am currently a second-year student pursuing a Bachelor of Technology in Computer Science And Technology at Birla Institute of Technology, Mesra. With a CGPA of 8.53, I am passionate about exploring the realms of data structures and algorithms (DSA) and full stack development. My journey in technology has led me to complete various projects and internships in Web and Android development, providing me with hands-on experience and expertise.</p>
           
            <a className={styles.contactbtn} href='Aman.pdf' download="Aman.pdf" > Downlode Resume</a>
        </div>
        <img className={styles.heroimg} src={getImageUrl("hero/profil.jpg")} alt='Hero Image Of me' />
      
        
    </section>
}
