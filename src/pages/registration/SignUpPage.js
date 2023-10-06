import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";

import {useDispatch, useSelector} from "react-redux";

import { setUser } from "../../store/actions/userAction";
import { setCurrentRoute } from "../../store/actions/navigationAction";

import useAnalyticsEventTracker from './../../components/useAnalyticsEventTracker/useAnalyticsEventTracker';

function SignUpPage () {

    const gaEventTracker = useAnalyticsEventTracker('Регистрация пользователя');

    const user = useSelector((state) => state.user);
    const navigation = useSelector((state) => state.navigation.navigation);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await axios.post('http://testing-jeyroony/api/index.php', inputs);

        alert(response.data.message);

        if (response.data.status === 1) {
            dispatch(setUser(response.data.username));
            navigate(navigation);
            gaEventTracker('Регистрация пользователя ' + response.data.username);
        }
    }
    const handleRouteChange = (newRoute) => {
        dispatch(setCurrentRoute(newRoute));
    };

    return (
        <>
            { user.user
                ?
                navigate(navigation)
                :
                <main>
                    <div className="main__gold__line"></div>
                    <div className="main__centralization__block">
                        <div className="register__form__container">
                            <div className="register__top__part">
                                <Link to="/"
                                      className="register__brand__name"
                                      onClick={() => {handleRouteChange("/");}}
                                >
                                    JeyRoony
                                </Link>
                            </div>

                            <form className="register__form"
                                  onSubmit={ handleSubmit }
                                  method="POST"
                            >

                                <h1 className="register__form__title">
                                    Зарегистрироваться
                                </h1>

                                <div className="register__form__input__container">
                                    <input type="text"
                                           placeholder="Введите имя пользователя"
                                           name="username"
                                           className="register__form__input"
                                           onChange={ handleChange }
                                           required
                                    />
                                </div>
                                <div className="register__form__input__container">
                                    <input type="password"
                                           placeholder="Введите пароль"
                                           name="password"
                                           className="register__form__input"
                                           onChange={ handleChange }
                                           required
                                    />
                                </div>

                                <div className="register__form__input__container">
                                    <button type="submit"
                                            className="register__form__button"
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </main>
            }
        </>


    )
}

export default SignUpPage;