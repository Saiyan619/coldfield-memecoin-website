import React from 'react'
import './sectiontwo.css'

const SectionTwo = () => {
  return (
    <div id='section2'>
          <div className='section_two'>
              <div className='section_two_text'>
                  <h2>About Us</h2>
                  <p>
                      Welcome to Coldfield, the coolest meme coin on Solana! Here, adventure meets the chill of crypto. Coldfield isn\'t just another token; it\'s a home for anyone who loves a good laugh, a little mystery, and the thrill of the crypto journey.
                  </p>
                  <p>
                  Inspired by the frosty depths of crypto winters and the resilience of true HODLers, Coldfield aims to create a unique community united by humor, resilience, and an undying love for the crypto frontier.
                  </p>
                  <p>
                  Ready to explore the crypto frontier? Join $Coldfield and embrace the chill like never before!
                  </p>

                  <div className='section_two_buttons'>
                      <button>Join Community</button>
                  </div>
              </div>

              
              <div className='section_two_image_container'>
                  <img  className='section_two_image' src="./sad_meme.png" alt="" />
              </div>

     </div>
    </div>
  )
}

export default SectionTwo
