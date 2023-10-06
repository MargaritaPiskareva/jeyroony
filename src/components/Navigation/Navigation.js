import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/registration/LoginPage";
import SignUpPage from "../../pages/registration/SignUpPage";

import NewProducts from "../../pages/NewProducts";
import Collection2020 from "../../pages/сollections/collection-2020";
import Collection2021 from "../../pages/сollections/collection-2021";
import Collection2022 from "../../pages/сollections/collection-2022";
import Collection2023 from "../../pages/сollections/collection-2023";

import SpringCollection2020 from "../../pages/сollections/collection-2020/spring-collection-2020";
import SpringCollection2021 from "../../pages/сollections/collection-2021/spring-collection-2021";
import SpringCollection2022 from "../../pages/сollections/collection-2022/spring-collection-2022";
import SpringCollection2023 from "../../pages/сollections/collection-2023/spring-collection-2023";

import SummerCollection2020 from "../../pages/сollections/collection-2020/summer-collection-2020";
import SummerCollection2021 from "../../pages/сollections/collection-2021/summer-collection-2021";
import SummerCollection2022 from "../../pages/сollections/collection-2022/summer-collection-2022";
import SummerCollection2023 from "../../pages/сollections/collection-2023/summer-collection-2023";

import AutumnCollection2020 from "../../pages/сollections/collection-2020/autumn-collection-2020";
import AutumnCollection2021 from "../../pages/сollections/collection-2021/autumn-collection-2021";
import AutumnCollection2022 from "../../pages/сollections/collection-2022/autumn-collection-2022";
import AutumnCollection2023 from "../../pages/сollections/collection-2023/autumn-collection-2023";

import WinterCollection2020 from "../../pages/сollections/collection-2020/winter-collection-2020";
import WinterCollection2021 from "../../pages/сollections/collection-2021/winter-collection-2021";
import WinterCollection2022 from "../../pages/сollections/collection-2022/winter-collection-2022";
import WinterCollection2023 from "../../pages/сollections/collection-2023/winter-collection-2023";
import ProductDetailedInformation from "../../pages/products__detailed__information/product__detailed__information";
import {useSelector} from "react-redux";

function Navigation () {

    const productDescription = useSelector((state) => state.productDescription);

    return (
        <>
            <Routes>
                <Route index path="/" element={<HomePage />}/>
                <Route path={"/user/login"} element={<LoginPage />}/>
                <Route path="/user/sign-up" element={<SignUpPage />}/>

                <Route path="/products/new-products" element={<NewProducts />}/>

                <Route path="/collections/collection-2020" element={<Collection2020 />}/>
                <Route path="/collections/collection-2021" element={<Collection2021 />}/>
                <Route path="/collections/collection-2022" element={<Collection2022 />}/>
                <Route path="/collections/collection-2023" element={<Collection2023 />}/>


                <Route path="/collections/collection-2020/spring-collection" element={<SpringCollection2020 />}/>
                <Route path="/collections/collection-2021/spring-collection" element={<SpringCollection2021 />}/>
                <Route path="/collections/collection-2022/spring-collection" element={<SpringCollection2022 />}/>
                <Route path="/collections/collection-2023/spring-collection" element={<SpringCollection2023 />}/>

                <Route path="/collections/collection-2020/summer-collection" element={<SummerCollection2020 />}/>
                <Route path="/collections/collection-2021/summer-collection" element={<SummerCollection2021 />}/>
                <Route path="/collections/collection-2022/summer-collection" element={<SummerCollection2022 />}/>
                <Route path="/collections/collection-2023/summer-collection" element={<SummerCollection2023 />}/>

                <Route path="/collections/collection-2020/autumn-collection" element={<AutumnCollection2020 />}/>
                <Route path="/collections/collection-2021/autumn-collection" element={<AutumnCollection2021 />}/>
                <Route path="/collections/collection-2022/autumn-collection" element={<AutumnCollection2022 />}/>
                <Route path="/collections/collection-2023/autumn-collection" element={<AutumnCollection2023 />}/>

                <Route path="/collections/collection-2020/winter-collection" element={<WinterCollection2020 />}/>
                <Route path="/collections/collection-2021/winter-collection" element={<WinterCollection2021 />}/>
                <Route path="/collections/collection-2022/winter-collection" element={<WinterCollection2022 />}/>
                <Route path="/collections/collection-2023/winter-collection" element={<WinterCollection2023 />}/>


                <Route path="/collections/collection-2020/spring-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2021/spring-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2022/spring-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2023/spring-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>

                <Route path="/collections/collection-2020/summer-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2021/summer-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2022/summer-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2023/summer-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>

                <Route path="/collections/collection-2020/autumn-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2021/autumn-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2022/autumn-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2023/autumn-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>

                <Route path="/collections/collection-2020/winter-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2021/winter-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2022/winter-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>
                <Route path="/collections/collection-2023/winter-collection/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>}/>

                <Route path="/main-products/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>
                <Route path="/products/new-products/product-detailed-information/:productId" element={<ProductDetailedInformation product={productDescription.productDescription}/>}/>
            </Routes>
        </>
    )
}

export default Navigation;