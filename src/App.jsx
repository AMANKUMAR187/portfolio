import styles from './App.module.css'
import { Hero } from './component/hero/hero'
import { NavBar } from './component/navbar/navbar'
import { About } from './component/about/about'
import { Tech } from './component/techstack/tech'
import {Projects} from './component/project/project'
import { Contact } from './component/contact/contact'

function App() {

  return (
    <div className={styles.App}>
       
       <NavBar/> 
      <Hero/>
      <About/>  
       <Tech/> 
       <Projects/>
       <Contact/>
      </div>
  )
}

export default App
