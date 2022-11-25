import styles from "./styles.module.scss"

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Home</h1>
            <h1>Projetos</h1>
            <h1>Techs</h1>
        </header>
    )
}