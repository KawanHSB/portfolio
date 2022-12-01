import styles from "./styles.module.scss"
import kawanAvatar from "../../assets/kawan.png"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


export function HomeContent() {
    return (
        <div>
            <div className={styles.wraper}>
                <img src={kawanAvatar} alt="" className={styles.elipse} />
                <p>
                    Sup I'm Kawan a begginer at front-end development
                    looking for a start at this market i've studied the
                    basics of development at Alura and now i'm learning new
                    tecnologies at RocketSeat check the techs for more,
                    i've knowledge at agile methods as Scrum and XP,
                    never work at a project with XP but know some concepts
                </p>
            </div>
            <footer>
                <a href="https://github.com/KawanHSB"><FaGithubSquare size={50} /></a>
                <a href="https://www.linkedin.com/in/kawan-batista-221a67203/"><FaLinkedin size={50} /></a>
            </footer>
        </div>
    )
}

