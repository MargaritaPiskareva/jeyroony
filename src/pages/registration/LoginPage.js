import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";

import {useDispatch, useSelector} from "react-redux";

import { setUser } from "../../store/actions/userAction";
import {setCurrentRoute} from "../../store/actions/navigationAction";

function LoginPage () {

    const user = useSelector((state) => state.user);
    const navigation = useSelector((state) => state.navigation.navigation);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://testing-jeyroony/api/login.php', inputs);
        alert(response.data.message);

        if (response.data.status === 1) {
            dispatch(setUser(response.data.username));
            console.log(navigation);
            navigate(navigation);
        }
    }

    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
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
                                      onClick={() => handleOptionClick("/")}
                                >
                                    JeyRoony
                                </Link>
                            </div>

                            <form className="register__form"
                                  onSubmit={ handleLogin }
                                  method="POST"
                            >
                                <h1 className="register__form__title">
                                    Войти в аккаунт
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
                                        Войти
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

export default LoginPage;