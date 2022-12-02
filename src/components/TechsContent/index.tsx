import { SiTypescript, SiJavascript, SiTailwindcss, SiSass, SiHtml5, SiCss3, SiReact } from "react-icons/si";
import styles from "./styles.module.scss"


export function TechsContent() {
    return (
        <main>
            <div>
                <SiCss3 className={styles['react-icons']} color="#264DE4"/>
                <SiHtml5 className={styles['react-icons']} color="#F24E1E"/>
                <SiJavascript className={styles['react-icons']} color="#FFC700"/>
            </div>
            <SiReact className={styles['react-icons']} color="#699BF7"/>
            <div>
                <SiTypescript className={styles['react-icons']} color="#699BF7"/>
                <SiSass className={styles['react-icons']} color="#CC6699"/>
                <SiTailwindcss className={styles['react-icons']} color="#699BF7"/>
            </div>
        </main>
    )
}
