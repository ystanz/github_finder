import { useEffect, useState } from "react"
import styles from './ReposList.module.css'


const ReposList = ({userName}) => {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.github.com/users/${userName}/repos`)
        
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setIsLoading(false)
                setRepos(resJson)
            }, 2000)
        })
    }, [userName])
    

    return (
        <div className={styles.reposContainer}>
            {isLoading ? (
                <img src={"./src/assets/images/loading.gif"} className={styles.loadingIco}/>
            ) : (
                <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList