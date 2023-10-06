import { useState } from 'react';

import axios from "axios";

import close_button from '../../icons/pop__up/close_button.png';

function Popup () {
    const [formData, setFormData] = useState({ request_description: '', 	size: '' });
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://testing-jeyroony/api/pop_up_window.php', formData);
    };


    const toggleWindow = () => {
        setIsWindowOpen(!isWindowOpen);
    };


    const [, setPopupClosed] = useState(localStorage.getItem('popupClosed') === 'true');
    const [isOpen, setIsOpen] = useState(true);

    const handleClosePopup = (status) => {
        setPopupClosed(status);
    };

    const closePopup = () => {
        setIsOpen(false);

        handleClosePopup(true);
    };


    return (
        <>
            {isOpen && (
                <div className="pop__app__container">
                    <div className={`window ${isWindowOpen ? 'open' : ''}`}>
                        <button className="pop__up__open__button"
                                onClick={ toggleWindow }
                        >
                            {isWindowOpen ? 'Закрыть' : 'Открыть'}
                        </button>
                        <div className="pop__up">
                            <div className="pop__up__top__part">
                                <div className="pop__up__top__part__title__container">
                                    <h1 className="pop__up__top__part__title">
                                        У вас есть вопрос?
                                    </h1>
                                </div>
                                <div className="pop__up__close__button__container">
                                    <img className="pop__up__close__button"
                                         onClick={closePopup}
                                         src={close_button}
                                         alt="Кнопка закрытия"
                                    />
                                </div>
                            </div>

                            <form className="pop__up__form"
                                  onSubmit={ handleSubmit }
                            >

                                <div className="pop__up__input__container">
                                    <p className="pop__up__input">
                                        Какой товар вас интересует?
                                    </p>
                                </div>

                                <div className="request__description__input__container">
                                    <input type="text"
                                           name="request_description"
                                           className="request__description__input"
                                           value={ formData.request_description }
                                           onChange={ handleInputChange }
                                           required
                                    />
                                </div>


                                <div className="pop__up__input__container">
                                    <p className="pop__up__input">
                                        Какой размер вас интересует?
                                    </p>
                                </div>

                                <div className="size__input__container">
                                    <input type="text"
                                           name="size"
                                           className="size__input"
                                           value={ formData.size }
                                           onChange={ handleInputChange }
                                           required
                                    />
                                </div>

                                <div className="send__pop__up__request">
                                    <button className="send__pop__up__request__button"
                                            type="submit"
                                    >
                                        Отправить
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default Popup;