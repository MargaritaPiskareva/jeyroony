import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setCurrentRoute} from "../../store/actions/navigationAction";

function BottomNavNewProducts () {
    const dispatch = useDispatch();

    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };

    return (
        <>
            <div className="bottom__nav__section__container">
                <div className="bottom__nav__section">
                    <Link to="/products/new-products"
                          className="bottom__nav__section__link"
                          onClick={() => handleOptionClick("/products/new-products")}
                    >
                        <p className="bottom__nav__section__title">Новинки</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BottomNavNewProducts;