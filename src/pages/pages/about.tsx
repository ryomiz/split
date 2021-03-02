import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import styles from 'src/styles/pages/about.module.scss'

const About = (): JSX.Element => (
  <>
    <Header />
    <main>
      <article className={styles.about}></article>
    </main>
    <Footer />
  </>
)
export default About
