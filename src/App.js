import './App.css';
import { HeaderNavbar } from './components/header-navbar';
import { Banner } from './components/banner';
import { AboutMe } from './components/aboutme';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import { Portofolio } from './components/portofolio';
function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <Banner />
      <AboutMe/>
      <Portofolio/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
