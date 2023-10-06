import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2022/autumn-collection-2022/a_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";
import {Link} from "react-router-dom";

function AutumnCollection2022() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "Цена",
            title: "Название вещи",
            description_1: "Краткое описание вещи",
            description_2: "Краткое описание вещи",
            description_3: "Краткое описание вещи",
            rating: 4.5,
        },
    ];

    const dispatch = useDispatch();

    const handleOptionClick = (route, product) => {
        dispatch(setCurrentRoute(route));
        dispatch(setProductDescription(product))
    };

    return (
        <main>

            <div className="main__gold__line"></div>
            <MainLogo />

            <div className="date__of__collection__container">
                <div className="date__of__collection">Осенняя коллекция 2022-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2022/autumn-collection/product-detailed-information/${index + 1}`}
                          className="season__collection__card__link"
                          onClick = {() => handleOptionClick("/product-detailed-information", seasonCollection)}
                    >
                        <div key={index}
                             className="season__collection__card"
                        >
                            <div className="season__collection__card__img__container">
                                <img src={seasonCollection.image}
                                     className="season__collection__card__img"
                                     alt={seasonCollection.alt}
                                />
                            </div>
                            <div className="season__collection__card__description">
                                <h1 className="season__collection__card__price">
                                    {seasonCollection.price}
                                </h1>
                                <p className="season__collection__card__title">
                                    {seasonCollection.title}
                                </p>
                                <p className="season__collection__card__product__description">
                                    {seasonCollection.description_1}
                                    <br/>
                                    {seasonCollection.description_2}
                                    <br/>
                                    {seasonCollection.description_3}
                                </p>
                                <div className="season__collection__card__rating__container">
                                    <div className="season__collection__card__rating__star">
                                        <img src={rating__star}
                                             className="season__collection__card__rating__star__img"
                                             alt="Изображение звезды оценивания"
                                        />
                                    </div>
                                    <div className="season__collection__card__total__rating__container">
                                        <p className="season__collection__card__total__rating">
                                            {seasonCollection.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default AutumnCollection2022;

