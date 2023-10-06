import MainLogo from "../../components/main/MainLogo";


import rating__star from "../../icons/products__card__items/rating__star.png";
function ProductDetailedInformation ( { product } ) {


    const mainProducts = [
            {
                image: product.image,
                alt: product.alt,
                price: product.price,
                title: product.title,
                description_1: product.description_1,
                description_2: product.description_2,
                description_3: product.description_3,
                rating: product.rating,
            }
        ];

    return (
        <main>
            <div className="main__gold__line"></div>
            <MainLogo />

            <div className="date__of__collection__container">
                <div className="date__of__collection">Подробная информация о продукте:</div>
            </div>

            <div className="product__card__container">
                    {mainProducts.map((mainProduct, index) => (
                        <>
                            <div className="product__card__img__container">
                                <img className="product__card__img"
                                     src={mainProduct.image}
                                     alt={mainProduct.alt}
                                />
                            </div>

                            <div className="product__card__outer__description__container">
                                <div className="product__card__inner__description__container">
                                    <div className="product__card__description">
                                        <h1 className="product__card__price">
                                            Стоимость: {mainProduct.price} тг
                                        </h1>
                                        <p className="product__card__title">
                                            {mainProduct.title}
                                        </p>
                                        <p className="product__card__triple__descriptions">
                                            {mainProduct.description_1}
                                            <br/>
                                            {mainProduct.description_2}
                                            <br/>
                                            {mainProduct.description_3}
                                        </p>
                                        <div className="product__card__rating__container">

                                            <div className="product__card__rating__number__container">
                                                <p className="product__card__rating__number">
                                                    Рейтинг: {mainProduct.rating}
                                                </p>
                                            </div>
                                            <div className="product__card__rating__star__container">
                                                <img src={rating__star}
                                                     className="product__card__rating__star__img"
                                                     alt="Изображение звезды оценивания"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </>
                    ))}
                </div>
        </main>
    );
}

export default ProductDetailedInformation;

