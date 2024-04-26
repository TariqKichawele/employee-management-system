import './App.css'
import Employee from './components/Employee'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent />}/>
          <Route path='/add-employee' element={<Employee />}/>
          <Route path='/edit-employee/:id' element={<Employee />}/>
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
