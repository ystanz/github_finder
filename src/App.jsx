import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import styles from "./App.module.css";

function App() {
  const [userName, setUserName] = useState('')
  const [inputValue, setInputValue] = useState ('')
  const handleSearch = () => {setUserName(inputValue)}
  return(
    <div className="container">
        <div className={styles.searchMenu}>
          <img className={styles.logo} src="./src/assets/images/githubFinderLogo.png" alt="Logo GitHub Finder" />
          <div className={styles.searchBar}>
            <input className={styles.input} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nome de usuário do GitHub" />
            <button className={styles.button} onClick={handleSearch}>Buscar</button>
          </div>
        </div>
        {userName.length > 4 && (
          <>
            <Perfil userName={userName}/> 
            <ReposList userName={userName} />  
          </>
        )}
      </div>
  )
}

export default App
