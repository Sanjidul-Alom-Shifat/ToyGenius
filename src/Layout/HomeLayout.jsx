// import React from 'react';
import Banner from '../Components/BannerSection/Banner';
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import ImageGallery from '../Components/GallerySection/ImageGallery';
import Services from '../Components/OurServices/Services';
import ToyCategory from '../Components/SubCategory/ToyCategory';
import UseTitle from '../Hook/UseTitle';

const HomeLayout = () => {

    UseTitle('Home');

    return (
        <div>

            <Banner></Banner>

            <ImageGallery></ImageGallery>

            <ToyCategory></ToyCategory>

            <CustomerReview></CustomerReview>

            <Services></Services>

        </div>
    );
};

export default HomeLayout;