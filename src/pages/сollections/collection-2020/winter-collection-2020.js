import rating__star from "../../../icons/products__card__items/rating__star.png";
import card__photo__1 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2020/winter-collection-2020/w_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";

function WinterCollection2020() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "57 340",
            title: 'Куртка "Debora"',
            description_1: "Черная куртка",
            description_2: 'Производитель: "Debora"',
            description_3: "Из уплотненной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "59 910",
            title: 'Куртка "Loony"',
            description_1: "Серая куртка",
            description_2: 'Производитель: "Loony"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "56 340",
            title: 'Пальто "Sarra"',
            description_1: "Серое пальто",
            description_2: 'Производитель: "Sarra"',
            description_3: "Из уплотненной ткани",
            rating: 4.1,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "55 480",
            title: 'Пальто "White"',
            description_1: "Белое пальто",
            description_2: 'Производитель: "White"',
            description_3: "Из уплотненной ткани",
            rating: 3.9,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "58 990",
            title: 'Пальто "Foxette"',
            description_1: "Шерстяное пальто",
            description_2: 'Производитель: "Foxette"',
            description_3: "Из шерстяной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "53 830",
            title: 'Пальто "Carmine"',
            description_1: "Красное пальто",
            description_2: 'Производитель: "Carmine"',
            description_3: "Из шерстяной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "57 440",
            title: 'Куртка "Abby"',
            description_1: "Кремовая куртка",
            description_2: 'Производитель: "Abby"',
            description_3: "Из уплотненной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "53 140",
            title: 'Куртка "Anatolia"',
            description_1: "Черная куртка",
            description_2: 'Производитель: "Anatolia"',
            description_3: "Из уплотненной ткани",
            rating: 4.1,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "56 590",
            title: 'Куртка "Rodny"',
            description_1: "Белая куртка",
            description_2: 'Производитель: "Rodny"',
            description_3: "Из уплотненной ткани",
            rating: 4.4,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "58 280",
            title: 'Куртка "Rospberry"',
            description_1: "Малиновая куртка",
            description_2: 'Производитель: "Rospberry"',
            description_3: "Из уплотненной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "54 390",
            title: 'Куртка "Rosaly"',
            description_1: "Красная куртка",
            description_2: 'Производитель: "Rosaly"',
            description_3: "Из уплотненной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "34 580",
            title: 'Свитер "Aminia"',
            description_1: "Солнечный свитер",
            description_2: 'Производитель: "Aminia"',
            description_3: "Из шерстяной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "36 280",
            title: 'Свитер "Tatty"',
            description_1: "Пушистый свитер",
            description_2: 'Производитель: "Tatty"',
            description_3: "Из шерстяной ткани",
            rating: 4.6,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "47 490",
            title: 'Пальто "Mandy"',
            description_1: "Белое пальто",
            description_2: 'Производитель: "Mandy"',
            description_3: "Из шерстяной ткани",
            rating: 4.7,
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
                <div className="date__of__collection">Зимняя коллекция 2020-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2020/winter-collection/product-detailed-information/${index + 1}`}
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

export default WinterCollection2020;

