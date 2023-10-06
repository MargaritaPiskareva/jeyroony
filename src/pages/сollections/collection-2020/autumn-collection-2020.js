import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2020/autumn-collection-2020/a_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";

function AutumnCollection2020() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "22 990",
            title: 'Блузка "Ohara"',
            description_1: "Блузка с тыквами",
            description_2: 'Производитель: "Ohara"',
            description_3: "Из легкой ткани",
            rating: 4.5,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "55 480",
            title: 'Пальто "Jennifer"',
            description_1: "Коричневое пальто",
            description_2: 'Производитель: "Jennifer"',
            description_3: "Из легкой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "48 670",
            title: 'Пиджак "NightFall"',
            description_1: "Темный пиджак",
            description_2: 'Производитель: "NightFall"',
            description_3: "Из уплотненной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "55 480",
            title: 'Рубашка "O\'Donnel"',
            description_1: "Клетчатая рубашка",
            description_2: 'Производитель: "O\'Donnel"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "25 330",
            title: 'Юбка "Nimfa"',
            description_1: "Клетчатая длинная юбка",
            description_2: 'Производитель: "Nimfa"',
            description_3: "Из плотной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "25 480",
            title: 'Юбка "Ostin"',
            description_1: "Клетчатая длинная юбка",
            description_2: 'Производитель: "Ostin"',
            description_3: "Из плотной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "55 480",
            title: 'Платье "Daria"',
            description_1: "Солнечное платье",
            description_2: 'Производитель: "Daria"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "52 120",
            title: 'Платье "Teresa"',
            description_1: "Полосатое зеленое платье",
            description_2: 'Производитель: "Teresa"',
            description_3: "Из уплотненной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "48 330",
            title: 'Платье "Lenny"',
            description_1: "Цветочное бежевое платье",
            description_2: 'Производитель: "Lenny"',
            description_3: "Из уплотненной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "27 540",
            title: 'Футболка "Ginger"',
            description_1: "Оранжевая футболка",
            description_2: 'Производитель: "Ginger"',
            description_3: "Из легкой ткани",
            rating: 4.4,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "58 210",
            title: 'Платье "Kitty"',
            description_1: "Клетчатое платье",
            description_2: 'Производитель: "Kitty"',
            description_3: "Из уплотненной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "35 720",
            title: 'Свитер "Pepper"',
            description_1: "Полосатый свитер",
            description_2: 'Производитель: "Pepper"',
            description_3: "Из шерстяной ткани",
            rating: 4.6,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "34 770",
            title: 'Свитер "Agatha"',
            description_1: "Зеленый свитер с цветами",
            description_2: 'Производитель: "Agatha"',
            description_3: "Из шерстяной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "45 880",
            title: 'Платье "Esmira"',
            description_1: "Синее платье в точку",
            description_2: 'Производитель: "Esmira"',
            description_3: "Из легкой ткани",
            rating: 4.6
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
                <div className="date__of__collection">Осенняя коллекция 2020-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2020/autumn-collection/product-detailed-information/${index + 1}`}
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

export default AutumnCollection2020;

