import styles from '../styles/layout.module.css'
import Image from "next/image";
export default function Layout(props) {
    return(
        <div className={styles.layout}>
            <h1 className={styles.title}>To Do </h1>
            <div className={styles.iconContainer}>
                <Image alt="Next Icon" src="/next.svg" width={48} height={48}/>
                <Image alt="Nest Icon" src="/nest.svg" width={48} height={48}/>
            </div>
            {props.children}

        </div>
    )
}