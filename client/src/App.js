import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Shows from './views/Shows'
import Merch from './views/Merch'
import AdminLogin from './views/AdminLogin'
import AdminDashboard from './views/AdminDashboard'
import EditShow from './views/EditShow'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from '@reach/router'




function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/"/>
        <About path="/about" />
        <Shows path="/shows" />
        <Merch path="/merch"/>
        <AdminLogin path='/admin/login' />
        <AdminDashboard path="/admin/dashboard" />
        <EditShow path="/admin/shows/:id" />
      </Router>
    </div>
  );
}

export default App;
