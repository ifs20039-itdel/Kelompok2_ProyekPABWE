import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Carousel from './components/Carousel'
import Content from './components/Content'
import Footer from './components/Footer'
// import logo_Del from './Assets/logo_Del.png';


function App(){
  return(
    <div className="App">
      <NavbarComp/>
      <Carousel/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
