import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './hero.module.css';


export const Hero = () => {
    return <section className={styles.container}>
        
        <div className={styles.content}> 
             <h1>Hi, I Am AMAN KUMAR</h1>
            <p className={styles.discription}>Lorem10 vnvsdlvwd vsdnvsovnslvsdvlv sdlvspgs. sdlf vwlrksv lrkrgmgsdls.gnwlfwfsdsfpwpfs,mngpodf.sdpsdgnglsdflsdmwfweptwnwgmwr I'm a full-stack developer with 2 year of experience with React,Nodejs,Flutter reach out to learn more!</p>
           
            <a className={styles.contactbtn} >Downlode Resume</a>
        </div>
        <img className={styles.heroimg} src={getImageUrl("hero/profil.jpg")} alt='Hero Image Of me' />
      
        
    </section>
}