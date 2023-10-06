import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2021/summer-collection-2021/sm_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";

function SummerCollection2021() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "35 780",
            title: 'Платье "Darsy"',
            description_1: "Оранжевое платье",
            description_2: 'Производитель: "Darsy"',
            description_3: "Из легкой ткани",
            rating: 4.2,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "37 290",
            title: 'Платье "Sanny"',
            description_1: "Красное платье с поясом",
            description_2: 'Производитель: "Sanny"',
            description_3: "Из легкой ткани",
            rating: 4.5,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "36 245",
            title: 'Платье "Rosette"',
            description_1: "Платье в цветочек",
            description_2: 'Производитель: "Rosette"',
            description_3: "Из легкой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "26 190",
            title: 'Блузка "Alleana"',
            description_1: "Блузка в цветочек",
            description_2: 'Производитель: "Alleana"',
            description_3: "Из легкой ткани",
            rating: 4.4,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "28 940",
            title: 'Свитер "Susanna"',
            description_1: "Голубой свитер",
            description_2: 'Производитель: "Susanna"',
            description_3: "Из шерстяной ткани",
            rating: 4.8,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "29 550",
            title: 'Свитер "Felicia"',
            description_1: "Бледно-желтый свитер",
            description_2: 'Производитель: "Felicia"',
            description_3: "Из шерстяной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "23 250",
            title: 'Юбка "Ariana"',
            description_1: "Юбка в крупный цветочек",
            description_2: 'Производитель: "Ariana"',
            description_3: "Из легкой ткани",
            rating: 4.3,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "24 550",
            title: 'Юбка "Jenna"',
            description_1: "Черная юбка с поясом",
            description_2: 'Производитель: "Jenna"',
            description_3: "Из легкой ткани",
            rating: 4.5,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "34 370",
            title: 'Куртка "Galaxy"',
            description_1: "Куртка с космосом",
            description_2: 'Производитель: "Galaxy"',
            description_3: "Из мягкой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "28 120",
            title: 'Шорты "Milana"',
            description_1: "Черные шорты",
            description_2: 'Производитель: "Milana"',
            description_3: "Из джинсовой ткани",
            rating: 4.4,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "32 350",
            title: 'Кофта "Flowers"',
            description_1: "Кофта в крупный цветочек",
            description_2: 'Производитель: "Flowers"',
            description_3: "Из мягкой ткани",
            rating: 4.8,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "35 550",
            title: 'Кофта "Natali"',
            description_1: "Кораловая кофта",
            description_2: 'Производитель: "Natali"',
            description_3: "Из мягкой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "26 540",
            title: 'Рубашка "Annabeth"',
            description_1: "Рубашка с рисунком",
            description_2: 'Производитель: "Annabeth"',
            description_3: "Из легкой ткани",
            rating: 4.8,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "28 920",
            title: 'Рубашка "Alicia"',
            description_1: "Рубашка с кактусами",
            description_2: 'Производитель: "Alicia"',
            description_3: "Из легкой ткани",
            rating: 4.9,
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
                <div className="date__of__collection">Летняя коллекция 2021-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2021/summer-collection/product-detailed-information/${index + 1}`}
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

export default SummerCollection2021;

