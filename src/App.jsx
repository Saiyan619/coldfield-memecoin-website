import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import SectionSeven from './secion7/SectionSeven'
import SectionOne from './section1/SectionOne'
import SectionTwo from './section2/SectionTwo'
import SectionThree from './section3/SectionThree'
import SectionFour from './section4/SectionFour'
import SectionFive from './section5/SectionFive'
import SectionSix from './sections6/SectionSix'

function App() {

  return (
    <>
      <Navbar />
        <Header />
      <SectionOne />
      <div className='wrapper_1'>
      <SectionTwo />
        <SectionThree />
      <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <Footer />
      </div>
    </>
  )
}

export default App
