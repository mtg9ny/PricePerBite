import styles from '../styles/individual.module.css'

export default function Title({ title }) {
    return (
        <>
            <div className={`${styles.title} ${styles.shadow}`}>{title}</div >
        </>
    );
}