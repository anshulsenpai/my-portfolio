import './App.css';
import Announcement from './components/Announcement/Announcement';
import { ActionBtn } from './components/Hero/Hero.styled';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import oracle from "./Assets/oracle-manual.pdf"


const App = () => {
  return (
    <div className="app">
      {/* <Announcement />
      <Navbar />
      <Home /> */}
       <ActionBtn href={oracle} varient="download">Download</ActionBtn>
    </div>
  );
}

export default App;
