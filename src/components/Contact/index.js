import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import  { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer,Marker,TileLayer,Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m7ez9xm','template_cvfbi6r',form.current,'xbHoxEEFauybbh0QP')
      .then (
        () => {
          alert('message successfully sent!')
          window.location.reload(false)
        },
       () => {
        alert('failed to send the message, please try again')
       }
      )
  }

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['C','o','n','t','a','c','t',' ','m','e']}
          idx={15} />
        </h1>
        <p>
           Want to work together? I'm open to freelance opportunities, especially for ambitious and large-scale projects. Get in touch using the form below.
        </p>

        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='email' required />
              </li>
              <li>
                <input placeholder='subject' type='text' name='subject' required />
              </li>
              <li>
                <textarea placeholder='message' name='message' required>
                </textarea>
              </li>
              <li>
              <input type='submit' className='flat-button' value='send' />   
              </li>
            </ul>
          </form>
        </div>
      </div>
        <div className='info-map'>
           Amirhossein Ghanbarzadeh,
          <br />
          Iran,
          <br />
          Tehran, <br />
          Tehran <br />
          phone : +98-9925169096
          <br />
          <a target='_blank' rel="noreferrer" href='https://t.me/six4developer'>
                    <FontAwesomeIcon icon={faTelegram} color='#4d4d4e'/>
                  </a>
          <span>six4developer@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[35.698141,51.369106]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "/>
            <Marker position={[35.698141,51.369106]}>
              <Popup>Six4 lives here,Whould you like to join me for a beer? 🍻       
              </Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
     <Loader type='pacman' />
    </>
  )
}

export default Contact
