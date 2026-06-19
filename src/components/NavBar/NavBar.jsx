import logo from "../../img/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {

  const categories = [
    {
      id: 1,
      label: "Fantasía Épica",
      path: "fantasia-epica"
    },
    {
      id: 2,
      label: "Grimdark",
      path: "grimdark"
    },
    {
      id: 3,
      label: "Ciencia Ficción",
      path: "ciencia-ficcion"
    }
  ]

  return (
    <nav className='navbar'>
      <div className='brand'>
        <Link to="/">
          <img
            src={logo}
            alt="BookWave Logo"
            className='brand-img'
          />
        </Link>
      </div>


      <ul className='categories'>
        {
          categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.path}`}>
                {category.label}
              </Link>
            </li>
          ))
        }
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar