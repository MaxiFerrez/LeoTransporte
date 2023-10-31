import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Vehiculos from './components/Vehiculos/vehiculos';
import Destinos from './components/Destinos/destinos';
import Footer from './components/Footer/footer';
import Contacto from './components/Contacto/contacto';




function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Vehiculos/>
      <Destinos/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App;
