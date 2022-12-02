import styles from "./styles.module.scss"
import { BsGithub } from "react-icons/bs";
import { useState, useEffect } from "react"

interface Project {
    name: string,
    html_url: string,
    created_at: string,
}

export function ProjetosContent() {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        fetch("https://api.github.com/users/kawanHSB/repos")
            .then(response => response.json())
            .then(data => {
                setProjects(data)
            })
    }, [])

    console.log(projects)

    return (
        <div className={styles.wraper}>
            {projects.map(project => {
                return (
                    <div className={styles.projectCard}>
                        <div className={styles.text}>
                            <h1>Name: {project.name}</h1>
                            <h1>Created at: {project.created_at}</h1>
                        </div>
                        <a href={project.html_url}>Open <BsGithub className={styles['react-icons']} /></a>
                    </div>
                )
            })}
        </div>
    )
}
