import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Titulo from "../components/ejemplos/Titulo/Titulo"

const LayoutApp = ( {children} ) => {
  return (
    <>
        <NavBar />  
        <Titulo />

        <main style={{padding:"20px"}}>
            {children}
        </main>
          


        <Footer />
    </>
  )
}

export default LayoutApp