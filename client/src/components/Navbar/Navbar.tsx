import { Link } from 'react-router-dom'
import { Footer } from '../Footer'
import { User, useUser } from '../../hooks/useUser'

import './Navbar.styles.scss'
import LogoImg from '../../assets/logo.png'
import searchLine from '../../assets/search-line.svg'
import articleLine from '../../assets/article-line.svg'
import focus3Line from '../../assets/focus-3-line.svg'
import userLine from '../../assets/user-line.svg'
import logoutuserLine from '../../assets/logout-circle-line.svg'
import briefcaseLine from '../../assets/briefcase-line.svg'
import fileAddLine from '../../assets/file-add-line.svg'

interface Item {
  title: string
  url: string
  icon: string
}

const professionalLinks: Item[] = [
  { title: 'Find that job', url: '#', icon: searchLine },
  { title: 'Your applications', url: '#', icon: articleLine },
  { title: 'Following', url: '#', icon: focus3Line },
]

const recruiterLinks: Item[] = [
  { title: 'Job Postings', url: '#', icon: briefcaseLine },
  { title: 'Create New Job', url: '#', icon: fileAddLine },
]

const NavbarItem = ({ title, url, icon }: Item) => {
  return (
    <li>
      <Link to={url}>
        <img src={icon} alt="" />
        <span>{title}</span>
      </Link>
    </li>
  )
}

export const Navbar = ({ user }: { user: User }) => {
  const { logout } = useUser()

  return (
    <nav className="Navbar">
      <div className="Navbar__container">
        <Link to="/home" className="Navbar__logo">
          <img src={LogoImg} alt="Get That Job logo" />
        </Link>
        <ul>
          {user.role === 'professional'
            ? professionalLinks.map(item => (
                <NavbarItem key={item.title} {...item} />
              ))
            : recruiterLinks.map(item => (
                <NavbarItem key={item.title} {...item} />
              ))}

          <NavbarItem title="Profile" url="/profile" icon={userLine} />
          <li>
            <button type="button" onClick={() => logout()}>
              <img src={logoutuserLine} alt="Logout icon" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </nav>
  )
}

// export const Navbar = ({ user }: { user: User }) => {
//   return (
//     <>
//       <div className="navbar">
//         <Link to="/" className="Header__logo">
//           <img src={LogoImg} alt="Get That Job logo" />
//         </Link>
//         <Link className="prueba" to="/FindThatJob">
//           <span>
//             <img src={searchLine} alt="" />
//           </span>{' '}
//           Find That job
//         </Link>
//         <Link to="#">
//           <span>
//             <img src={articleLine} alt="" />
//           </span>
//           Your apllication
//         </Link>
//         <Link to="#">
//           <span>
//             <img src={focus3Line} alt="" />
//           </span>
//           Foollowing
//         </Link>

//         <Link to="/JobPostings">
//           <span>
//             <img src={briefcaseLine} alt="" />
//           </span>
//           Job Postings{' '}
//         </Link>
//         <Link to="/CreateNewJob">
//           <span>
//             <img src={fileAddLine} alt="" />
//           </span>
//           Create New Job
//         </Link>
//         <Link to="/profile">
//           <span>
//             <img src={userLine} alt="" />
//           </span>
//           Profile
//         </Link>
//         <Link to="#">
//           <span>
//             <img src={logoutuserLine} alt="" />
//           </span>
//           Logout
//         </Link>

//         <Footer />
//       </div>
//     </>
//   )
// }
