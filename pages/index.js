import {Header} from '../components/header'
import {Footer} from '../components/footer'
import {Board} from '../components/board'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Board/>
      <Footer/>
    </div>
  )
}
