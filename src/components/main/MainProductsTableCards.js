        import card__photo__1 from "../../imgs/products__cards__photos/card__photo__1.jpg";
        import card__photo__2 from "../../imgs/products__cards__photos/card__photo__2.jpg";
        import card__photo__3 from "../../imgs/products__cards__photos/card__photo__3.jpg";
        import card__photo__4 from "../../imgs/products__cards__photos/card__photo__4.jpg";
        import card__photo__5 from "../../imgs/products__cards__photos/card__photo__5.jpg";
        import card__photo__6 from "../../imgs/products__cards__photos/card__photo__6.jpg";
        import card__photo__7 from "../../imgs/products__cards__photos/card__photo__7.jpg";
        import card__photo__8 from "../../imgs/products__cards__photos/card__photo__8.jpg";
        import card__photo__9 from "../../imgs/products__cards__photos/card__photo__9.jpg";
        import card__photo__10 from "../../imgs/products__cards__photos/card__photo__10.jpg";
        import card__photo__11 from "../../imgs/products__cards__photos/card__photo__11.jpg";
        import card__photo__12 from "../../imgs/products__cards__photos/card__photo__12.jpg";
        import card__photo__13 from "../../imgs/products__cards__photos/card__photo__13.jpg";
        import card__photo__14 from "../../imgs/products__cards__photos/card__photo__14.jpg";

import rating__star from "../../icons/products__card__items/rating__star.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../store/actions/navigationAction";
import { setProductDescription } from "../../store/actions/productDescriptionAction";


function MainProductsTableCards () {

    const mainProducts = [
        {
            image: card__photo__1,
            alt: "Описание товара",
            price: "45 990",
            title: 'Жакет "Milinda"',
            description_1: "Удлиненный жакет",
            description_2: 'Производитель: "Milinda"',
            description_3: "Из уплотненной ткани",
            rating: 4.5,
        },

        {
            image: card__photo__2,
            alt: "Описание товара",
            price: "36 220",
            title: 'Блузка "Charlotte"',
            description_1: "Изумрудная блузка",
            description_2: 'Производитель: "Charlotte"',
            description_3: "Из атласной ткани",
            rating: 4.2,
        },

        {
            image: card__photo__3,
            alt: "Описание товара",
            price: "39 890",
            title: 'Платье "Amelia"',
            description_1: "Бежевое платье",
            description_2: 'Производитель: "Amelia"',
            description_3: "Из уплотненной ткани",
            rating: 4.0,
        },

        {
            image: card__photo__4,
            alt: "Описание товара",
            price: "29 770",
            title: 'Блузка "Naomi"',
            description_1: "Белоснежная блузка",
            description_2: 'Производитель: "Naomi"',
            description_3: "Из кружевной ткани",
            rating: 4.2,
        },

        {
            image: card__photo__5,
            alt: "Описание товара",
            price: "31 120",
            title: 'Блузка "Caroline"',
            description_1: "Блузка в клетку",
            description_2: 'Производитель: "Caroline"',
            description_3: "Хлопчатобумажная ткань",
            rating: 3.9,
        },

        {
            image: card__photo__6,
            alt: "Описание товара",
            price: "42 980",
            title: 'Кардиган "Alexis"',
            description_1: "Кремовый кардиган",
            description_2: 'Производитель: "Alexis"',
            description_3: "Из утепленной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__7,
            alt: "Описание товара",
            price: "22 450",
            title: 'Водолазка "Diana"',
            description_1: "Синяя водолазка",
            description_2: 'Производитель: "Diana"',
            description_3: "Из шерстяной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__8,
            alt: "Описание товара",
            price: "24 380",
            title: 'Поло "Jessica"',
            description_1: "Белоснежное поло",
            description_2: 'Производитель: "Jessica"',
            description_3: "Хлопчатобумажная ткань",
            rating: 4.8,
        },

        {
            image: card__photo__9,
            alt: "Описание товара",
            price: "44 670",
            title: 'Кардиган "Madonna"',
            description_1: "Коричневый кардиган",
            description_2: 'Производитель: "Madonna"',
            description_3: "Из уплотненной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__10,
            alt: "Описание товара",
            price: "24 220",
            title: 'Поло "Felicia"',
            description_1: "Коричневое поло",
            description_2: 'Производитель: "Felicia"',
            description_3: "Из уплотненной ткани",
            rating: 4.7,
        },

        {
            image: card__photo__11,
            alt: "Описание товара",
            price: "44 490",
            title: 'Кофта "Aphelia"',
            description_1: "Клетчатая кофта",
            description_2: 'Производитель: "Aphelia"',
            description_3: "Из шерстяной ткани",
            rating: 4.1,
        },

        {
            image: card__photo__12,
            alt: "Описание товара",
            price: "39 990",
            title: 'Платье "Miranda"',
            description_1: "Кораловое платье",
            description_2: 'Производитель: "Miranda"',
            description_3: "Из шерстяной ткани",
            rating: 4.9,
        },

        {
            image: card__photo__13,
            alt: "Описание товара",
            price: "27 340",
            title: 'Юбка "Catrine"',
            description_1: "Юбка с узором в точку",
            description_2: 'Производитель: "Catrine"',
            description_3: "Из уплотненной ткани",
            rating: 4.3,
        },

        {
            image: card__photo__14,
            alt: "Описание товара",
            price: "28 110",
            title: 'Шарф "Jubilant"',
            description_1: "Цветастый шарф",
            description_2: 'Производитель: "Jubilant"',
            description_3: "Из шерстяной ткани",
            rating: 4.8,
        },
    ];

    const dispatch = useDispatch();
    const handleOptionClick = (route, product) => {
        dispatch(setCurrentRoute(route));
        dispatch(setProductDescription(product))
    };
    return (
        <>
            <div className="main__products__table__container">
                {mainProducts.map((mainProduct, index) => (
                    <Link to={`/main-products/product-detailed-information/${index + 1}`}
                          className="main__products__card__link"
                          onClick = {() => handleOptionClick("/product-detailed-information", mainProduct)}
                    >
                        <div key={index}
                             className="main__products__card"
                        >

                            <div className="main__products__card__img__container">
                                    <img src={mainProduct.image}
                                         className="main__products__card__img"
                                         alt={mainProduct.alt}
                                    />
                            </div>

                            <div className="main__products__card__description">
                                <h1 className="main__products__card__price">
                                    {mainProduct.price}
                                </h1>
                                <p className="main__products__card__title">
                                    {mainProduct.title}
                                </p>
                                <p className="main__products__card__product__description">
                                    {mainProduct.description_1}
                                    <br/>
                                    {mainProduct.description_2}
                                    <br/>
                                    {mainProduct.description_3}
                                </p>
                                <div className="main__products__card__rating__container">
                                    <div className="main__products__card__rating__star">
                                        <img src={rating__star}
                                             className="main__products__card__rating__star__img"
                                             alt="Изображение звезды оценивания"
                                        />
                                    </div>
                                    <div className="main__products__card__total__rating__container">
                                        <p className="main__products__card__total__rating">
                                            {mainProduct.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default MainProductsTableCards;