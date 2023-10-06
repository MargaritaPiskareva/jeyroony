import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2020/spring-collection-2020/s_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";
import {Link} from "react-router-dom";

function SpringCollection2020() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "24 660",
            title: 'Юбка "Susana"',
            description_1: "Клетчатая юбка",
            description_2: 'Производитель: "Susana"',
            description_3: "Из легкой ткани",
            rating: 4.2,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "28 790",
            title: 'Юбка "Markisa"',
            description_1: "Клетчатая юбка",
            description_2: 'Производитель: "Markisa"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "32 100",
            title: 'Юбка "Glory"',
            description_1: "Кожаная юбка",
            description_2: 'Производитель: "Glory"',
            description_3: "Из кожаной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "35 290",
            title: 'Свитер "Danna"',
            description_1: "Коричневый свитер",
            description_2: 'Производитель: "Danna"',
            description_3: "Из шерстяной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "39 735",
            title: 'Свитер "Lumene"',
            description_1: "Коричневый свитер",
            description_2: 'Производитель: "Lumene"',
            description_3: "Из шерстяной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "36 345",
            title: 'Рубашка "Shadia"',
            description_1: "Клетчатая рубашка",
            description_2: 'Производитель: "Shadia"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "26 215",
            title: 'Рубашка "Elie"',
            description_1: "Цветочная рубашка",
            description_2: 'Производитель: "Elie"',
            description_3: "Из легкой ткани",
            rating: 4.4,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "28 995",
            title: 'Рубашка "Sammy"',
            description_1: "Цветочная рубашка",
            description_2: 'Производитель: "Sammy"',
            description_3: "Из легкой ткани",
            rating: 4.5,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "29 885",
            title: 'Рубашка "Perry"',
            description_1: "Цветочная рубашка",
            description_2: 'Производитель: "Perry"',
            description_3: "Из легкой ткани",
            rating: 4.8,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "29 295",
            title: 'Рубашка "Taisia"',
            description_1: "Рубашка в сердечко",
            description_2: 'Производитель: "Taisia"',
            description_3: "Из легкой ткани",
            rating: 4.9,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "34 875",
            title: 'Пиджак "Olle"',
            description_1: "Мятный пиджак",
            description_2: 'Производитель: "Olle"',
            description_3: "Из легкой ткани",
            rating: 4.9,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "31 305",
            title: 'Пиджак "Debby"',
            description_1: "Зеленый пиджак",
            description_2: 'Производитель: "Debby"',
            description_3: "Из кожаной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "34 335",
            title: 'Блузка "Assia"',
            description_1: "Белоснежная блузка",
            description_2: 'Производитель: "Assia"',
            description_3: "Из кружевной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "34 975",
            title: 'Блузка "Molly"',
            description_1: "Белоснежная блузка",
            description_2: 'Производитель: "Molly"',
            description_3: "Из кружевной ткани",
            rating: 4.8,
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
                <div className="date__of__collection">Весенняя коллекция 2020-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2020/spring-collection/product-detailed-information/${index + 1}`}
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

export default SpringCollection2020;

