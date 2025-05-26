import styles from './App.module.css';
import poweredImage from "./assets/powered.png";

function App() {
 

  return (
  
    <div className={styles.main} >
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={250}/>

        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          testando 123
        </div>
        <div className={styles.rightSide}>
          testado 123
        </div>
      </div>
    </div>
  
  )
}

export default App;
