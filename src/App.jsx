
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
