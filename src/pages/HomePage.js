import MainLogo from "../components/main/MainLogo";
import MainBrandCurrentCollection from "../components/main/MainBrandCurrentCollection";
import MainBrandExamples from "../components/main/MainBrandExamples";
import MainProductsTableCards from "../components/main/MainProductsTableCards";

function HomePage () {
    return (

        <main>
            <div className="main__gold__line"></div>

            <MainLogo />
            <MainBrandCurrentCollection />
            <MainBrandExamples />
            <MainProductsTableCards />

        </main>
    )
}

export default HomePage;