import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import styles from 'src/styles/Home.module.scss'

const Home: NextPage = () => {
  const [isopen, setIsOpen] = useState(false)

  const openMenu = (): void => {
    setIsOpen(!isopen)
    console.log(isopen)
  }

  const array: number[] = []
  for (let i = 1; i < 101; i++) {
    array.push(i)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_left}>
          <div
            className={styles.menubar}
            style={{ left: isopen ? '-50px' : '-150px' }}
          >
            <button className={styles.js_menu} onClick={openMenu}></button>
          </div>
        </div>
        <div className={styles.main_right}>
          {array.map((num, index) => (
            <p key={index} className={styles.txt}>
              {num}行目です
            </p>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
