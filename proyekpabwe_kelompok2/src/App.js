import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Carousel from './components/Carousel'
// import logo_Del from './Assets/logo_Del.png';


function App(){
  return(
    <div className="App">
      <NavbarComp/>
      <Carousel/>
      <div >
        <h3 class="head">TEXT</h3>
      </div>
    </div>
  );
}

export default App;
