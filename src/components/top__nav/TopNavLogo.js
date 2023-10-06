import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/actions/navigationAction";

import logo from "../../icons/logo/logo.png";

function TopNavLogo () {
    const dispatch = useDispatch();
    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };
    return (
        <>
            <div className="top__nav__section top__nav__logo">
                <Link to="/"
                      onClick={() => handleOptionClick("/")}
                >
                    <img className="top__nav__logo__img"
                         src={logo}
                         alt="Логотип компании 'Jeyroony',
                          выглядящий как рыжеватый алмаз"
                    />
                </Link>

                <Link to="/"
                      className="top__nav__brand__name"
                      onClick={() => handleOptionClick("/")}
                >
                    Jeyroony
                </Link>
            </div>
        </>
    )
}

export default TopNavLogo;