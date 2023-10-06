import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../store/actions/navigationAction";

function BottomNavSales () {
    const dispatch = useDispatch();

    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };
    return (
        <>
            <div className="bottom__nav__section__container">
                <div className="bottom__nav__section">
                    <Link to="/"
                       className="bottom__nav__section__link"
                       onClick={() => handleOptionClick("/")}
                    >
                        <p className="bottom__nav__section__title">Доступные акции</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BottomNavSales;