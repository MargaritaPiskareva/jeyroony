function TopNavSearch () {
    return (
        <>
            <div className="top__nav__section top__nav__search__container" >
                <form className="top__nav__search__form" role="search">
                    <input type="search" className="top__nav__search__input" placeholder="Поиск" aria-label="Поиск" />
                    <button type="submit" className="top__nav__search__button">Найти</button>
                </form>
            </div>
        </>
    )
}

export default TopNavSearch;