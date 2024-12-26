import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_main_con'>
          <div className='footer'>
              <div className='copyright_container'>
                  <p>Copyrights All rights reserved by <span className='span_text'>$Coldfield</span></p>
              </div>

              <div className='footer_list_container'>
                  <span>Home</span>
                  <span>About</span>
                  <span>Roadmap</span>
                  <span>Tokenomics</span>
                  <span>FAQ</span>
              </div>
      </div>
    </div>
  )
}

export default Footer
