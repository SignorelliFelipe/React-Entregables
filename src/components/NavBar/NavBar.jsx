import logo from "../../img/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./navbar.css"

const NavBar = () => {

  const categories = [
    {
      id: 1,
      label: "Fantasía Épica"
    },
    {
      id: 2,
      label: "Grimdark"
    },
    {
      id: 3,
      label: "Ciencia Ficción"
    }
  ]

  return (
    <nav className ='navbar'>
        <div className='brand'>
            <img src={logo} alt="BookWave Logo" className='brand-img' />
        </div>


        <ul className='categories'>
           {
            categories.map((category)=> (
               <li key={category.id}> {category.label} </li>
            ))
           }
        </ul>

        <CartWidget />
    </nav>
  )
}

export default NavBar