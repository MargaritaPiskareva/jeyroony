import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/actions/navigationAction";

function BottomNavCollections () {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        setIsOpen(false);
        dispatch(setCurrentRoute(value));
    };

    return (
        <>
            <div className="bottom__nav__section__container bottom__nav__last__section__container">
                <div className="bottom__nav__dropdown__section">
                    <div className="bottom__nav__section">
                        <p className="bottom__nav__section__title"
                           onClick={ toggleDropdown }
                        >
                            Коллекции
                        </p>
                    </div>

                    {isOpen && (
                        <div className="bottom__nav__section__list">
                            <Link className="bottom__nav__collections__list__link"
                                  to="/collections/collection-2020"
                                  onClick={() => handleOptionClick("/collections/collection-2020")}
                            >
                                <div className="bottom__nav__collections__list__li">
                                    Коллекция 2020-го года
                                </div>
                            </Link>

                            <Link className="bottom__nav__collections__list__link"
                                  to="/collections/collection-2021"
                                  onClick={() => handleOptionClick("/collections/collection-2021")}
                            >
                                <div className="bottom__nav__collections__list__li">
                                    Коллекция 2021-го года
                                </div>
                            </Link>

                            <Link className="bottom__nav__collections__list__link"
                                  to="/collections/collection-2022"
                                  onClick={() => handleOptionClick("/collections/collection-2022")}
                            >
                                <div className="bottom__nav__collections__list__li">
                                    Коллекция 2022-го года
                                </div>
                            </Link>

                            <Link className="bottom__nav__collections__list__link"
                                  to="/collections/collection-2023"
                                  onClick={() => handleOptionClick("/collections/collection-2023")}
                            >
                                <div className="bottom__nav__collections__list__li">
                                    Коллекция 2023-го года
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BottomNavCollections;