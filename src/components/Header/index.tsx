import styles from "./styles.module.scss"
import { Link, Navigate } from "react-router-dom"

export function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="./">Home</Link>
                <Link to="./projetos">Projetos</Link>
                <Link to="./techs">Techs</Link>
            </nav>
        </header>
    )
}
