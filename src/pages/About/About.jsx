import { Header } from './About.styled'
import { Link } from 'react-router-dom'

import ligtedVanImage from '/public/images/lightVan.png'

const About = () => {
  return (
    <Header>
      <img src={ligtedVanImage} alt="Lighted Van" />
      <section className='contentHeader'>
        <h1>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)

          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
      </section>
      <section className="box">
        <h1>Your destination is waiting.</h1>
        <h1>Your van is ready.</h1>
        <Link to="/vans" className='blackBtn'>Explore our vans</Link>
      </section>
    </Header>
  )
}

export default About