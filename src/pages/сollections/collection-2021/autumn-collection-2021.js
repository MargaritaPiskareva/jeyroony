import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2021/autumn-collection-2021/a_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";
import {Link} from "react-router-dom";

function AutumnCollection2021() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "67 290",
            title: 'Комтюм "Debora"',
            description_1: "Голубой костюм двойка",
            description_2: 'Производитель: "Debora"',
            description_3: "Из уплотненной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "37 110",
            title: 'Платье "Jasmin"',
            description_1: "Темно-синее платье",
            description_2: 'Производитель: "Jasmin"',
            description_3: "Из уплотненной ткани",
            rating: 4.6,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "38 220",
            title: 'Платье "Odry"',
            description_1: "Красное платье",
            description_2: 'Производитель: "Odry"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "35 370",
            title: 'Платье "Vanessa"',
            description_1: "Красное платье",
            description_2: 'Производитель: "Vanessa"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "38 970",
            title: 'Платье "Chelsie"',
            description_1: "Бежевое платье",
            description_2: 'Производитель: "Chelsie"',
            description_3: "Из уплотненной ткани",
            rating: 4.6,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "49 150",
            title: 'Пальто "Marocco"',
            description_1: "Пальто в полоску",
            description_2: 'Производитель: "Marocco"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "43 480",
            title: 'Пиджак "Edema"',
            description_1: "Пиджак в точку",
            description_2: 'Производитель: "Edema"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "45 880",
            title: 'Пиджак "Aliana"',
            description_1: "Коричневый пиджак",
            description_2: 'Производитель: "Aliana"',
            description_3: "Из уплотненной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "48 240",
            title: 'Пиджак "Denny"',
            description_1: "Коричневый пиджак",
            description_2: 'Производитель: "Denny"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "23 460",
            title: 'Юбка "Cherry"',
            description_1: "Юбка в клетку",
            description_2: 'Производитель: "Cherry"',
            description_3: "Из уплотненной ткани",
            rating: 4.6,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "25 260",
            title: 'Юбка "Rosetta"',
            description_1: "Синяя длинная юбка",
            description_2: 'Производитель: "Rosetta"',
            description_3: "Из уплотненной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "45 830",
            title: 'Пальто "Osmin"',
            description_1: "Красное пальто",
            description_2: 'Производитель: "Osmin"',
            description_3: "Из уплотненной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "22 560",
            title: 'Юбка "Viala"',
            description_1: "Голубая длинная юбка",
            description_2: 'Производитель: "Viala"',
            description_3: "Из уплотненной ткани",
            rating: 4.2,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "26 220",
            title: 'Блузка "Nimona"',
            description_1: "Полосатая блузка",
            description_2: 'Производитель: "Nimona"',
            description_3: "Из уплотненной ткани",
            rating: 4.3,
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
                <div className="date__of__collection">Осенняя коллекция 2021-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2021/autumn-collection/product-detailed-information/${index + 1}`}
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

export default AutumnCollection2021;

