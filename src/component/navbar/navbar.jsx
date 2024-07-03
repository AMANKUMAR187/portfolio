import react,{useState} from 'react';
import styles from "./navbar.module.css";
import {getImageUrl} from "../../utils"

export const NavBar = () =>{
    const [menuopen, setmenuopen] = useState(false);
    return <nav
          className={styles.navbar}> 
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menubtn}
             src={
                menuopen ?
                getImageUrl("nav/closeIcon.png"):
                getImageUrl("nav/menuIcon.png")
            } alt="menu-button"
            onClick={() => {
                setmenuopen(!menuopen);
            }}
            />
            <ul className={`${styles.menuitems} ${menuopen && styles.menuopen}`} 
                onClick={ () => {setmenuopen(false)}}
               >
                <li ><a href='#about'>About</a> </li>
                <li ><a href='#projects'>Projects</a> </li>
                <li ><a href='#contact'>Contact</a> </li>
                <li ><a href='#experience'>experience</a> </li>

            </ul>
        </div>
    </nav>
}