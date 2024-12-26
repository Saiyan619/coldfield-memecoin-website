import './App.css'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
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
      </div>
    </>
  )
}

export default App
