import styles from "./Perfil.module.css"

const Perfil = ({ userName }) => {
    return (
        <header className={styles.header}>
            <div>
            <img className={styles.avatar} src={`https://github.com/${userName}.png`} />
            <h1 className={styles.name}>
                {userName}
            </h1>
            </div>
            <img className={styles.listStats} height="100%" loading="lazy" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=compact&langs_count=7&theme=tokyonight&locale=pt-br`} /> 
        </header>
    )
}

export default Perfil;