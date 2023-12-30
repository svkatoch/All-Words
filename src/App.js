
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';

function App() {
  return (
  
      <>
        <Navbar title="TextUtils" abouttitle="About Us" hometitle="Home"/>
        <div className="container">
        <TextForm heading="Enter Your Text To Analyze Below" />
        <AboutUs/>

        </div>
      </>

   
      );
}

export default App;
