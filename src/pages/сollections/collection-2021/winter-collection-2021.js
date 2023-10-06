import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2021/winter-collection-2021/w_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {Link} from "react-router-dom";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";
import {useDispatch} from "react-redux";

function WinterCollection2021() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "25 290",
            title: 'Берет "Mandy"',
            description_1: "Зеленый берет",
            description_2: 'Производитель: "Mandy"',
            description_3: "Из шерстяной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "57 280",
            title: 'Куртка "Olga"',
            description_1: "Бежевая куртка",
            description_2: 'Производитель: "Olga"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "53 590",
            title: 'Куртка "Samantha"',
            description_1: "Зеленая куртка",
            description_2: 'Производитель: "Samantha"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "25 360",
            title: 'Берет "Eddy"',
            description_1: "Коричневый берет",
            description_2: 'Производитель: "Eddy"',
            description_3: "Из шерстяной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "58 210",
            title: 'Пальто "Alexa"',
            description_1: "Коричневое пальто",
            description_2: 'Производитель: "Alexa"',
            description_3: "Из уплотненной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "55 280",
            title: 'Куртка "Agatha"',
            description_1: "Кремовая куртка",
            description_2: 'Производитель: "Agatha"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "57 830",
            title: 'Куртка "Sasha"',
            description_1: "Кремовая куртка",
            description_2: 'Производитель: "Sasha"',
            description_3: "Из уплотненной ткани",
            rating: 4.6,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "59 230",
            title: 'Куртка "Adele"',
            description_1: "Зеленая куртка",
            description_2: 'Производитель: "Adele"',
            description_3: "Из уплотненной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "56 820",
            title: 'Пальто "Vivien"',
            description_1: "Пальто в клетку",
            description_2: 'Производитель: "Vivien"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "57 295",
            title: 'Куртка "Pallete"',
            description_1: "Серая куртка",
            description_2: 'Производитель: "Pallete"',
            description_3: "Из уплотненной ткани",
            rating: 4.2,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "59 670",
            title: 'Куртка "Finita"',
            description_1: "Коричневая куртка",
            description_2: 'Производитель: "Finita"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "63 590",
            title: 'Куртка "Sharine"',
            description_1: "Джинсовая куртка",
            description_2: 'Производитель: "Sharine"',
            description_3: "Из джинсовой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "59 230",
            title: 'Пальто "Dennima"',
            description_1: "Черное пальто",
            description_2: 'Производитель: "Dennima"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "61 280",
            title: 'Куртка "Fiona"',
            description_1: "Красная куртка",
            description_2: 'Производитель: "Fiona"',
            description_3: "Из уплотненной ткани",
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
                <div className="date__of__collection">Зимняя коллекция 2021-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2021/winter-collection/product-detailed-information/${index + 1}`}
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

export default WinterCollection2021;

