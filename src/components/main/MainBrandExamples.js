import main__brand__first__example from "../../imgs/main__brand__examples/main__brand__first__example.jpg";
import main__brand__second__example from "../../imgs/main__brand__examples/main__brand__second__example.jpg";
import main__brand__third__example from "../../imgs/main__brand__examples/main__brand__third__example.jpg";

function MainBrandExamples () {
    return (
        <>
            <div className="main__brand__examples__container">
                <img src={main__brand__first__example}
                     className="main__brand__examples"
                     alt="Фотография девушки в зеленом поло"
                />
                <img src={main__brand__second__example}
                     className="main__brand__examples main__brand__mid__example"
                     alt="Фотография девушки в коричневом поло"
                />
                <img src={main__brand__third__example}
                     className="main__brand__examples"
                     alt="Фотография девушки в сером поло"
                />
            </div>
        </>
    )
}

export default MainBrandExamples;