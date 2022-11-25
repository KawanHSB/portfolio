import styles from "./styles.module.scss"
import "../../assets/kawan.png"
import {  } from "react-icons"

export function HomeContent() {
    return (
        <div>
            <div className={styles.wraper}>
                <span className={styles.image}/>
                <p>
                    Sup I'm Kawan a begginer at front-end development 
                    looking for a start at this market i've studied the 
                    basics of development at Alura and now i'm learning new 
                    tecnologies at RocketSeat check the techs for more,
                    i've knowledge at agile methods as Scrum and XP, 
                    never work at a project with XP but know some concepts
                </p>
            </div>
            <div>
                <a href="https://github.com/KawanHSB"></a>
                <a href=""></a>
            </div>
        </div>

    )
}

