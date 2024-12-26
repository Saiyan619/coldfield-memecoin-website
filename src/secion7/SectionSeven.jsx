import React from 'react'
import './sectionseven.css'

const SectionSeven = () => {
    return (
      <div className='section7_main_container'>
            <div className='section7'> 
                <div className='section7_content'> 
                    <div style={{ display: 'flex', alignItems: 'center' , flexDirection: 'column', justifyContent: 'center'}}>
          <img className='section7_hero_img' src="./logo (1).svg" alt="" />
                        <span className='section7_hero_title'>Join our Community</span>
                        </div>
                <p>
        $Coldfield isn&rsquo;t just a digital asset. It&rsquo;s a place where crypto lovers, meme enthusiasts, and adventurers can come together to embrace the chill of the blockchain world. Powered by Solana.
                </p>
                
                <p>
                $Coldfield is lightning-fast, letting you experience crypto trading without the typical delays and high fees.
                </p>

                    <div className='section7_cta_container'>
                        <div className='section7_cta_btn_container'>
                            <img className='section7_cta_btn' src="./icons8-discord.svg" alt="" />
                        </div>
                        
                        <div className='section7_cta_btn_container'>
                            <img className='section7_cta_btn' src="./icons8-twitterx (1).svg" alt="" />
                            </div>
                    </div>
                </div>
            </div>
           
            </div>
  )
}

export default SectionSeven
