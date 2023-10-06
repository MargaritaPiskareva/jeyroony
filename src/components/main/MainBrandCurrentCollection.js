import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/actions/navigationAction";

import curren__collection__banner from "../../imgs/current_collection_banner/curren__collection__banner.jpg";

function MainBrandCurrentCollection () {

    const dispatch = useDispatch();
    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };
    return (
        <>
            <div className="main__brand__current__collection">
                <img src={curren__collection__banner}
                     alt="Баннер текущей коллекции"
                     className="main__brand__current__collection__img"
                />

                <div className="main__brand__current__collection__overlay__container">
                    <p className="main__brand__current__collection__overlay__title">
                        Autumn collection
                    </p>
                    <p className="main__brand__current__collection__overlay__description">
                        Посмотри новинки этой осени уже сейчас!
                    </p>

                    <div className="main__brand__current__collection__overlay__action__button__container">
                        <button className="main__brand__current__collection__overlay__action__button">
                            <Link to="/products/new-products"
                                  className="main__brand__current__collection__overlay__action__button__link"
                                  onClick={() => handleOptionClick("/products/new-products")}
                            >
                                Перейти к новинкам!
                            </Link>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainBrandCurrentCollection;