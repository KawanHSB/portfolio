import styles from "./styles.module.scss"
import { BsGithub } from "react-icons/bs";

export function ProjetosContent() {
    return (
        <div className={styles.wraper}>
            <div className={styles.projectCard}>
                <div className={styles.text}>
                    <h1>Name: nome</h1>
                    <h1>Created at: 22-01-22</h1>
                </div>
                <button>Open <BsGithub className={styles['react-icons']} /></button>
            </div>
        </div>
    )
}
