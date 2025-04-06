import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import six4 from '../../assets/images/e1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
  faHammer,
  // faWrench,
  // faTools,
  // faCube,
  // faGear,
  // faCode,
  // faFolderOpen,
  // faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img className="six4" src={six4} alt="six4" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHammer} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul className="ul">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/six4baller"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://t.me/six4developer">
            <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar

// import './index.scss'
// import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/e1.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEnvelope, faHome , faUser} from '@fortawesome/free-solid-svg-icons'
// import {faGithub, faYoutube ,faTelegram,} from "@fortawesome/free-brands-svg-icons"

// const Sidebar = () => {
//   return (
//     <div className='nav-bar'>
//       <Link className='logo' to='/'>
//       {/* <img src={LogoS} alt="logo" /> */}

//       <img className='sub-logo' src={LogoSubtitle} alt="six4" />

//       </Link>

//       <nav>
//         <NavLink
//         exact="true"
//         activeclassname="active"
//         to='/'>
//         <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//         exact="true"
//         activeclassname="active"
//         className="about-link"
//         to='/about'>
//         <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//         exact="true"
//         activeclassname="active"
//         className="contact-link"
//         to='/contact'>
//         <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//         </NavLink>
//       </nav>

//       {/* <ul> */}
//        {/* list classname for contact me form */}

//       <ul className='ul1'>
//         <li>
//         <a target='_blank' rel="noreferrer" href='https://github.com/six4baller'>
//           <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
//         </a>
//         </li>
//         {/* <li>
//         <a target='_blank' rel="noreferrer" href='https://github.com/'>
//           <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
//         </a>
//         </li> */}
//         <li>
//         <a target='_blank' rel="noreferrer" href='https://t.me/six4developer'>
//           <FontAwesomeIcon icon={faTelegram} color='#4d4d4e'/>
//         </a>
//         </li>
//         {/* <li>
//         <a target='_blank' rel="noreferrer" href='https://github.com/'>
//           <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
//         </a>
//         </li> */}
//       </ul>
//     </div>
//   )
// }

// export default Sidebar
