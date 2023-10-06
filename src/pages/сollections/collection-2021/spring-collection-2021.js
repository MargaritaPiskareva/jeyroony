import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2021/spring-collection-2021/s_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";

function SpringCollection2021() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "33 350",
            title: 'Блузка "Shadia"',
            description_1: "Кружевная блузка",
            description_2: 'Производитель: "Shadia"',
            description_3: "Из кружевной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "32 110",
            title: 'Блузка "Elie"',
            description_1: "Кружевная блузка",
            description_2: 'Производитель: "Elie"',
            description_3: "Из кружевной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "31 250",
            title: 'Блузка "Roxy"',
            description_1: "Белоснежная блузка",
            description_2: 'Производитель: "Roxy"',
            description_3: "Из легкой ткани",
            rating: 4.2,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "32 770",
            title: 'Блузка "Bekky"',
            description_1: "Белоснежная блузка",
            description_2: 'Производитель: "Bekky"',
            description_3: "Из кружевной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "36 345",
            title: 'Рубашка "Naomi"',
            description_1: "Джинсовая рубашка",
            description_2: 'Производитель: "Naomi"',
            description_3: "Из джинсовой ткани",
            rating: 4.8,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "39 550",
            title: 'Платье "Hillary"',
            description_1: "Голубое платье с рюшками",
            description_2: 'Производитель: "Hillary"',
            description_3: "Из легкой ткани",
            rating: 4.6,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "42 435",
            title: 'Куртка "Samantha"',
            description_1: "Кожаная куртка",
            description_2: 'Производитель: "Samantha"',
            description_3: "Из кожаной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "38 450",
            title: 'Платье "Glory"',
            description_1: "Коричневое платье",
            description_2: 'Производитель: "Glory"',
            description_3: "Из легкой ткани",
            rating: 4.6,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "28 790",
            title: 'Юбка "Rihanna"',
            description_1: "Красная юбка",
            description_2: 'Производитель: "Rihanna"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "25 330",
            title: 'Юбка "Zhanna"',
            description_1: "Синяя юбка",
            description_2: 'Производитель: "Zhanna"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "39 190",
            title: 'Платье "Holly"',
            description_1: "Темно-синее платье",
            description_2: 'Производитель: "Holly"',
            description_3: "Из легкой ткани",
            rating: 4.6,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "38 390",
            title: 'Платье "Ashley"',
            description_1: "Платье цвета хаки",
            description_2: 'Производитель: "Ashley"',
            description_3: "Из плотной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "39 460",
            title: 'Комбинезон "Lucy"',
            description_1: "Клетчатый комбинезон",
            description_2: 'Производитель: "Lucy"',
            description_3: "Из плотной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "42 760",
            title: 'Комбинезон "Amanda"',
            description_1: "Коричневый комбинезон",
            description_2: 'Производитель: "Amanda"',
            description_3: "Из плотной ткани",
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
                <div className="date__of__collection">Весенняя коллекция 2021-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2021/spring-collection/product-detailed-information/${index + 1}`}
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

export default SpringCollection2021;

