import React from 'react'
import './sectionthree.css'

const SectionThree = () => {
    return (
        <div id='section3' className='section_three_main'>
            <h3>Coldfield Tokenomics</h3>
            <div className='section_three'>
                
         <div className='card_container'>
            <div className='card'>
                <span className='card_title'>Price</span>
                <p className='card_price'>$0.000009729</p>
                    </div>
                     <div className='card'>
                <span className='card_title'>Total Liquidity</span>
                <p className='card_price'>$5.14K</p>
                    </div>
                     <div className='card'>
                <span className='card_title'>24h Volume</span>
                <p className='card_price'>$2.33K</p>
                    </div>
                    
        </div>
        
        <div className='image_container'>
            <img src="./body_character_illustration.png" alt="Character Illustration" className='character_image' />
        </div>
        
        <div className='card_container'>
            <div className='card'>
                <span className='card_title'>Market cap</span>
                <p className='card_price'>$9.73K</p>
                    </div>
                      <div className='card'>
                <span className='card_title'>Circulating supply</span>
                <p className='card_price'>1,000,000,000</p>
                    </div>
                      <div className='card'>
                <span className='card_title'>Total supply</span>
                <p className='card_price'>1,000,000,000</p>
                    </div>
                    
        </div>
            </div>
            </div>
)
}

export default SectionThree
