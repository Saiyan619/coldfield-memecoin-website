import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div id='head' className='header'>
          <div className='header_container'>
              <div className='header_text'> 
                  <h1>$Coldfield</h1>
                  <p>Embrace the Chill of Solana's Fastest Meme</p>
                  <div className='header_links'>
                      <img src="./dexscreener.png" alt="" />
                      <img src="./dextools.png" alt="" />
                  </div>

                  <div className='header_buttons'>
                  <button>Buy Cold <img className='btn_img' src="./Logo_2.png" alt="" /></button>
              </div>
              </div>

              <div className='header_image_container'>
                  <img className='header_image' src="./hero_astronaut.png" alt="" />
              </div>
              
             
      </div>
    </div>
  )
}

export default Header
