import React from 'react'
import './index.scss'
import Sidebar from '../Sidebar'
import logo from '../../assets/shop_img.png'

const Project = () => {
  return (
    <div>
      <Sidebar />
      <div className="container-project">
        <div className="content">
          <a
            href="https://six4.ir/shop/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="" />
          </a>
          {/* <img src={logo} /> <Link to="https://six4.ir/shop/"></Link> */}
        </div>
      </div>
    </div>
  )
}

export default Project

// import React from 'react'
// import './index.scss'

// const projects = [
//   {
//     title: 'فروشگاه آنلاین',
//     image: '/images/shop-cover.jpg',
//     link: 'https://six4.ir/shop/',
//   },
//   {
//     title: 'پروژه آموزش',
//     image: '/images/edu-cover.jpg',
//     link: 'https://six4.ir/edu/',
//   },
//   {
//     title: 'وبلاگ شخصی',
//     image: '/images/blog-cover.jpg',
//     link: 'https://six4.ir/blog/',
//   },
//   // پروژه‌های دیگه...
// ]

// export default function project() {
//   return (
//     <div className="gallery-container">
//       {projects.map((project, index) => (
//         <a
//           className="project-box"
//           key={index}
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={project.image} alt={project.title} />
//           <div className="overlay">
//             <h3>{project.title}</h3>
//           </div>
//         </a>
//       ))}
//     </div>
//   )
// }



// {/* <div className="container-project">
//   <div className="content">
//     <a href="https://six4.ir/shop/#/" target="_blank" rel="noopener noreferrer">
//       <img src={logo} alt="پروژه ۱" />
//     </a>
//   </div>
  
//   <div className="content">
//     <a href="https://example.com" target="_blank" rel="noopener noreferrer">
//       <img src={anotherLogo} alt="پروژه ۲" />
//     </a>
//   </div>

//   {/* ادامه پروژه‌ها... */}
// // </div> */}
