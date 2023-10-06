import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/actions/navigationAction";

import MainLogo from "../../components/main/MainLogo";

import season_1 from '../../imgs/collections/collection-2022/season_1.jpg';
import season_2 from '../../imgs/collections/collection-2022/season_2.jpg';
import season_3 from '../../imgs/collections/collection-2022/season_3.jpg';
import season_4 from '../../imgs/collections/collection-2022/season_4.jpg';


function Collection2022() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const collections = [
        {
            image: season_1,
            title: "Весенняя коллекция",
            link: "/collections/collection-2022/spring-collection",
        },
        {
            image: season_2,
            title: "Летняя коллекция",
            link: "/collections/collection-2022/summer-collection",
        },
        {
            image: season_3,
            title: "Осенняя коллекция",
            link: "/collections/collection-2022/autumn-collection",
        },
        {
            image: season_4,
            title: "Зимняя коллекция",
            link: "/collections/collection-2022/winter-collection",
        },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    const dispatch = useDispatch();
    const handleOptionClick = (value) => {
        dispatch(setCurrentRoute(value));
    };

    return (
        <main>
            <div className="main__gold__line"></div>
            <MainLogo />

            <div className="date__of__collection__container">
                <div className="date__of__collection">Коллекции 2022-го года:</div>
            </div>

            <div className="collection__banner">
                {collections.map((collection, index) => (
                    <div
                        key={index}
                        className={`collection__season__container ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={collection.image}
                            className="collection__season"
                            alt="Изображение коллекции"
                        />

                        {hoveredIndex === index && (
                            <div className="collection__season__title__container">
                                <p className="collection__season__title">
                                    {collection.title}
                                </p>

                                <div className="collection__season__button__container">
                                    <button className="collection__season__button">
                                        <Link to={collection.link}
                                              className="collection__season__button__link"
                                              onClick={() => handleOptionClick(collection.link)}
                                        >
                                            Посмотреть
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Collection2022;

