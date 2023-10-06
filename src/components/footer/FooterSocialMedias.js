import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/actions/navigationAction";

import instagram from "../../icons/social__medias/instagram.svg";
import facebook from "../../icons/social__medias/facebook.svg";
import twitter from "../../icons/social__medias/twitter.svg";
import telegram from "../../icons/social__medias/telegram.svg";
import whatsapp from "../../icons/social__medias/whatsapp.svg";

function FooterSocialMedias () {
    const dispatch = useDispatch();
    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };

    return (
        <ul className="footer__social__medias__container">
            <li className="footer__social__media">
                <Link to="https://www.instagram.com/"
                      className="footer__social__media__link"
                      onClick={() => handleOptionClick("https://www.instagram.com/")}
                >
                    <img src={instagram}
                         className="footer__social__media__img"
                         alt="Логотип инстаграма"
                    />
                </Link>
            </li>

            <li className="footer__social__media">
                <Link to="https://ru-ru.facebook.com/"
                      className="footer__social__media__link"
                      onClick={() => handleOptionClick("https://ru-ru.facebook.com/")}
                >
                    <img src={facebook}
                         className="footer__social__media__img"
                         alt="Логотип фейсбука"
                    />
                </Link>
            </li>

            <li className="footer__social__media">
                <Link to="https://twitter.com/tweeter"
                      className="footer__social__media__link"
                      onClick={() => handleOptionClick("https://twitter.com/tweeter")}
                >
                    <img src={twitter}
                         className="footer__social__media__img"
                         alt="Логотип твиттера"
                    />
                </Link>
            </li>

            <li className="footer__social__media">
                <Link to="https://web.telegram.org/k/"
                      className="footer__social__media__link"
                      onClick={() => handleOptionClick("https://web.telegram.org/k/")}
                >
                    <img src={telegram}
                         className="footer__social__media__img"
                         alt="Логотип телеграма"
                    />
                </Link>
            </li>

            <li className="footer__social__media">
                <Link to="https://www.whatsapp.com/?lang=ru_RU"
                      className="footer__social__media__link"
                      onClick={() => handleOptionClick("https://www.whatsapp.com/?lang=ru_RU")}
                >
                    <img src={whatsapp}
                         className="footer__social__media__img"
                         alt="Логотип ватсапа"
                    />
                </Link>
            </li>
        </ul>
    )
}

export default FooterSocialMedias;