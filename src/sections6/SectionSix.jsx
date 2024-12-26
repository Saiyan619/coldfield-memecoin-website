import React, { useState } from 'react'
import './sectionsix.css'

const SectionSix = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionItems = [
        {
            title: "What blockchain is Coldfield built on?",
            content:
                "$Coldfield operates on the Solana blockchain, known for its high-speed transactions and low fees, ideal for a meme coin community like ours.",
        },
        {
            title: 'How do I buy Cold?',
            content: 'Simply get a Solana-compatible wallet, acquire $SOL, and use a decentralized exchange to trade for $Cold',
        },
        {
            title: 'What makes Coldfield different from other meme coins?',
            content: 'Yes! Coldfield offers exclusive NFT drops and collectibles, giving holders special opportunities to own unique digital assets.',
        },
        {
            title: "Is Coldfield secure?",
            content: 'Built on Solana, $Coldfield benefits from a secure, reliable blockchain that ensures fast and safe transactions.',
        },
        {
            title: "How do I connect with the Coldfield community?",
            content: 'Join us on social media, participate in events, and stay updated on exclusive releases by following $Coldfield’s channels',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='section6' id="section6" >
            <div className="section_six_container">
                <div className='section_six_img_container'>
                    <img className='section_six_img' src="./faq_img.png" alt="" />
                </div>
                <h5>FAQ Asked Questions</h5>
           
            <div className="accordion">
                {accordionItems.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className="accordion-title"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeIndex === index ? 'show' : ''
                            }`}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default SectionSix
