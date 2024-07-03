import react from 'react';
import styles from './tech.module.css';
import skills from "../../../skills.json";
import { getImageUrl } from '../../utils';



export const Tech = ()=>{
    return (<>
            
        <div className={styles.skills}>
        <h2 className={styles.title}>My Area Of Expertise</h2>
        <div className={styles.items} >
         {
          skills.map((data) => (
             <>
                 <div className={styles.item} key={data.id}>
                 <img src={getImageUrl(data.img)}  alt='tech_image'/>
                 <h3>{data.title}</h3>
                 </div>
             
             </>
          ))
         
         }
        </div>
        </div>
         
    
       </>
    );
}