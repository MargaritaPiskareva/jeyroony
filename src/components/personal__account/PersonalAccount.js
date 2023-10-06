import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../store/actions/userAction";
function PersonalAccount () {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [isOpen, setIsOpen] = useState(false);
    const [, setSelectedOption] = useState(null);

    const options = [
        'Выйти',
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        if (option === 'Выйти') {
            dispatch(logoutUser());
            setSelectedOption(null);
        } else {
            setSelectedOption(option);
        }

        setIsOpen(false);
    };

    return (
        <div className="top__nav__section">
            <div className="dropdown__menu">
                <div className="dropdown">
                    <div className="dropdown__header"
                         onClick={ toggleDropdown }
                    >
                        {user.user}
                    </div>

                    {isOpen &&
                        (<ul className="dropdown__list">
                                {options.map((option, index) => (
                                    <li key={index}
                                        onClick={() => handleOptionSelect(option)}
                                        className="dropdown__item"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                </div>
            </div>
        </div>
    )
}

export default PersonalAccount;