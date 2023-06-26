import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Proyects from './components/proyects/Proyects';
import { BrowserRouter as  Router, Routes , Route } from "react-router-dom";

function App() {

  return (

    <Router>
        <Routes >
            <Route  path="/" element={<Login/>}/>
            <Route  path="/Register" element={<Register/>}/>
            <Route  path="/Proyects" element={<Proyects/>}/>

        </Routes >
    </Router>

  )
}

export default App
