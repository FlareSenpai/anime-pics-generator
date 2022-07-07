import React, { useState } from 'react'
import axios from 'axios'
import style from '../styles/Home.module.css'

function Home() {
  const [image, setImage] = useState()

  const getWaifuImage = async () => {
    const response = await fetch('https://api.waifu.pics/sfw/waifu')
    const data = await response.json()

    setImage(data.url)
  }

  const getNSFWImage = async () => {
    const response = await fetch('https://api.waifu.pics/nsfw/waifu')
    const data = await response.json()

    setImage(data.url)
  }

  return (
    <React.Fragment>
      <header>
        <h1 className={style.title}>Random Anime Pics Generator</h1>
      </header>

      <main className={style.container}>
        <div className={style.buttonContainer}>
          <button type='button' onClick={() => getWaifuImage()}>Waifu Image</button>  
          <button type='button' onClick={() => getNSFWImage()}>NSFW Image</button>
        </div>

        <a href={image}>
          <img src={image} width={400} />
        </a>
      </main>

      <footer className={style.footer}>
        <p>API source: waifu.pics</p>
      </footer>
    </React.Fragment>
  )
}

export default Home