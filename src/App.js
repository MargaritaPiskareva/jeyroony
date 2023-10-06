import ReactGA from 'react-ga';

import './App.css';

import './css/top__nav.css';
import './css/bottom__nav.css';
import './css/main__logo.css';
import './css/main__brand__current__collection.css';
import './css/main__brand__example.css';
import './css/main__products__table.css';
import './css/pop__up.css';
import './css/footer.css';

import './css/registration.css';
import './css/personal__account.css';
import './css/collections/collections.css';
import './css/collections/season-collection.css';

import './css/product__detailed__information.css';

import { BrowserRouter, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import PersonalAccount from "./components/personal__account/PersonalAccount";


import TopNavLogo from "./components/top__nav/TopNavLogo";
import TopNavSearch from "./components/top__nav/TopNavSearch";

import BottomNavNewProducts from "./components/bottom__nav/BottomNavNewProducts";
import BottomNavSales from "./components/bottom__nav/BottomNavSales";
import BottomNavCollections from "./components/bottom__nav/BottomNavCollections";

import FooterSocialMedias from "./components/footer/FooterSocialMedias";
import Popup from "./components/pop__up/PopUpWindow";
import Navigation from "./components/Navigation/Navigation";


const TRACKING_ID = "G-CQNXPBDJWQ";
ReactGA.initialize(TRACKING_ID);
function App() {
    const user = useSelector((state) => state.user);

   return (
      <div className="App">
                  <BrowserRouter>
                      <header>
                          <nav className="top__nav">
                              <TopNavLogo />
                              <TopNavSearch />

                              {
                                  user.user
                                      ?
                                  <PersonalAccount />
                                  :
                                  (
                                      <div className="top__nav__section">
                                          <Link to="user/login">
                                              <button type="button"
                                                      className="login__button"
                                              >
                                                  Войти
                                              </button>
                                          </Link>

                                          <Link to="user/sign-up">
                                              <button type="button"
                                                      className="sign__up__button"
                                              >
                                                  Зарегистрироваться
                                              </button>
                                          </Link>
                                      </div>
                                  )
                              }
                          </nav>

                          <nav className="bottom__nav">
                              <BottomNavNewProducts />
                              <BottomNavSales />
                              <BottomNavCollections />
                          </nav>

                      </header>

                      <Popup />

                      <Navigation />

                      <footer>
                          <FooterSocialMedias />
                          <div className="footer__dividing__line"></div>

                          <p className="footer__copyright">
                              &copy; 2023 JeyRoony
                          </p>
                      </footer>
                  </BrowserRouter>
              </div>
  );
}

export default App;
