import './assets/styles/main.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './pages/signin/SignIn';


function App() {
  return (
    <>
     <Navbar/>
    <Sidebar/>
       {/* <SignIn/>  */}
      <Footer/>
    </>
  );
}

export default App;
