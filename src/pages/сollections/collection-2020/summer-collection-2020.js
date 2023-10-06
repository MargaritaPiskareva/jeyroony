import rating__star from "../../../icons/products__card__items/rating__star.png";

import card__photo__1 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_1.jpg";
import card__photo__2 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_2.jpg";
import card__photo__3 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_3.jpg";
import card__photo__4 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_4.jpg";
import card__photo__5 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_5.jpg";
import card__photo__6 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_6.jpg";
import card__photo__7 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_7.jpg";

import card__photo__8 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_8.jpg";
import card__photo__9 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_9.jpg";
import card__photo__10 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_10.jpg";
import card__photo__11 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_11.jpg";
import card__photo__12 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_12.jpg";
import card__photo__13 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_13.jpg";
import card__photo__14 from "../../../imgs/collections/collection-2020/summer-collection-2020/sm_14.jpg";

import MainLogo from "../../../components/main/MainLogo";
import {useDispatch} from "react-redux";
import {setCurrentRoute} from "../../../store/actions/navigationAction";
import {setProductDescription} from "../../../store/actions/productDescriptionAction";
import {Link} from "react-router-dom";

function SummerCollection2020() {

    const seasonCollections = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "27 340",
            title: 'Платье "Catrine"',
            description_1: "Платье в вишенку",
            description_2: 'Производитель: "Catrine"',
            description_3: "Из легкой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "28 100",
            title: 'Платье "Lessy"',
            description_1: "Платье в цветочек",
            description_2: 'Производитель: "Lessy"',
            description_3: "Из легкой ткани",
            rating: 4.8,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "29 560",
            title: 'Платье "Rosa"',
            description_1: "Платье в клубничку",
            description_2: 'Производитель: "Rosa"',
            description_3: "Из легкой ткани",
            rating: 4.4,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "29 200",
            title: 'Платье "Melony"',
            description_1: "Платье в цветочек",
            description_2: 'Производитель: "Melony"',
            description_3: "Из легкой ткани",
            rating: 4.1,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "28 870",
            title: 'Юбка "Madina"',
            description_1: "Юбка до колена",
            description_2: 'Производитель: "Madina"',
            description_3: "Из легкой ткани",
            rating: 4.7,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "29 540",
            title: 'Юбка "Hanna"',
            description_1: "Солнечная юбка",
            description_2: 'Производитель: "Hanna"',
            description_3: "Из легкой ткани",
            rating: 4.9,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "27 770",
            title: 'Платье "Fiona"',
            description_1: "Платье в птичек",
            description_2: 'Производитель: "Fiona"',
            description_3: "Из легкой ткани",
            rating: 4.3,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "29 450",
            title: 'Платье "Jenny"',
            description_1: "Платье в птичек",
            description_2: 'Производитель: "Jenny"',
            description_3: "Из легкой ткани",
            rating: 4.5,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "25 780",
            title: 'Платье "Doroty"',
            description_1: "Красное платье в горошек",
            description_2: 'Производитель: "Doroty"',
            description_3: "Из легкой ткани",
            rating: 4.2,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "24 890",
            title: 'Блузка "Roxy"',
            description_1: "Блузка в цветочек",
            description_2: 'Производитель: "Roxy"',
            description_3: "Из легкой ткани",
            rating: 4.9,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "26 190",
            title: 'Юбка "Aida"',
            description_1: "Юбка в цветочек",
            description_2: 'Производитель: "Aida"',
            description_3: "Из легкой ткани",
            rating: 4.1,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "25 290",
            title: 'Блузка "Kelly"',
            description_1: "Блузка в цветочек",
            description_2: 'Производитель: "Kelly"',
            description_3: "Из легкой ткани",
            rating: 4.3,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "27 990",
            title: 'Блузка "Berry"',
            description_1: "Блузка в цветочек",
            description_2: 'Производитель: "Berry"',
            description_3: "Из легкой ткани",
            rating: 4.6,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "23 540",
            title: 'Блузка "Maria"',
            description_1: "Блузка в цветочек",
            description_2: 'Производитель: "Maria"',
            description_3: "Из легкой ткани",
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
                <div className="date__of__collection">Летняя коллекция 2020-го года:</div>
            </div>

            <div className="season__collection__table__container">
                {seasonCollections.map((seasonCollection, index) => (
                    <Link to={`/collections/collection-2020/summer-collection/product-detailed-information/${index + 1}`}
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

export default SummerCollection2020;

