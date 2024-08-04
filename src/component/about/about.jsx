import react from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About & Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/college.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h2>Birla Institute Of Technology Mesra, Ranchi</h2>
              <p>
                B.Tech in CSE : CGPA-8.52/10.00
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h2>Achievements</h2>
              <p>
              • 3rd PRIZE IN IEEE MEGA-PROJECT HACKATHON ,2023 among 140+ teams
              </p>
              <p>
              • 1st PRIZE IN ESTIMANIA by Finance Club- Bit-Mesra, 2023 among 20+ teams
              </p>
              <p>
              • Solved 500+ Questions On various Platform including leetcode,gfg,codechef,codeforces.
              </p>
              <p>
              • 98.12%ile in Jee Main with 17k rank among 20lakh+ students 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h2>Clubs & Society</h2>
              <p>
              • IEEE Student Branch-BIT Mesra
              
              </p>
              <p>
              • IET On Campus-BIT Mesra
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};



// import react from "react";

// import styles from "./about.module.css";
// import { getImageUrl } from "../../utils";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//           src={getImageUrl("about/laptop.png")}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 I'm a frontend developer with experience in building responsive
//                 and optimized sites
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimised back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };
