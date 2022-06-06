import './css/App.css';
import React from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import OGPass from "./pages/OGPass";
import PetLecture from "./pages/PetLecture";
import PetArt from "./pages/PetArt";
import About from "./pages/About";
import Login from "./pages/Login";
import Video from "./pages/Video";

fontawesome.library.add(faBars);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logined: false,
      address: null,
    };
  }

  componentDidMount() {
    setInterval(
      () => this.checkLogin(),
      1000
    );
  }

  checkLogin() {
    if (localStorage.getItem("walletAddress") != null) {
      this.setState({ logined: false });
      this.setState({ address: null });
    } else {
      this.setState({ logined: true });
      this.setState({ address: localStorage.getItem("walletAddress") });
    }
  }

  render() {
    return (
      <HashRouter>
        <header>
          <div className="video-group">
            <NavLink to="/videos">
              <button className="video-button" role="button">課程影片</button>
            </NavLink>
          </div>
          <div className="login-group" style={ this.props.start_minting != null ? {} : { display: 'none' } }>
            <NavLink to="/login">{ localStorage.getItem("walletAddress") || "登入/登出" }</NavLink>
          </div>
          <nav className="menu">
            <label for="switch"><FontAwesomeIcon icon="fa-solid fa-bars" /></label>
            <input type="checkbox" id="switch" />
            <ul className="menu-list">
              <li className="navitem">
                <NavLink to="/">OG Pass</NavLink>
              </li>
              <li className="navitem">
                <NavLink to="/pet-lecture">寵物大講堂</NavLink>
              </li>
              <li className="navitem">
                <NavLink to="/about">關於元宇宙寵物</NavLink>
              </li>
            </ul>
          </nav>
          <a href="/" className="navbar-brand">
            <img src={process.env.PUBLIC_URL + "/img/logo_150.png"} className="logo" alt="元宇宙寵物" />
          </a>
        </header>
        <div id="content">
          <Routes>
            <Route exact path="/" element={<OGPass />}></Route>
            <Route path="/pet-lecture" element={<PetLecture />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/videos" element={<Video />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
