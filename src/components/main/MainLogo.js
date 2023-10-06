import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/actions/navigationAction";

import logo from "../../icons/logo/logo.png";

function MainLogo () {

    const dispatch = useDispatch();
    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };
    return (
        <>
            <div className="main__logo__container">
                <div className="main__logo">
                    <Link to="/"
                          onClick={() => handleOptionClick("/")}
                    >
                        <img src={logo}
                             alt="Логотип компании Jeyroony,
                                выглядящий как рыжеватый алмаз"
                             className="main__logo__img"
                        />
                    </Link>
                    <Link to="/"
                          className="main__logo__brand__name"
                          onClick={() => handleOptionClick("/")}
                    >
                        Jeyroony
                    </Link>
                </div>

                <div className="main__tagline__container">
                    <p className="main__tagline">— find your own style</p>
                </div>
            </div>
        </>
    )
}

export default MainLogo;