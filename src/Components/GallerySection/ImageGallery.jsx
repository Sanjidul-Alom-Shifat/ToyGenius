import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageGallery = () => {
    const images = [
        'https://img.freepik.com/free-psd/amusement-park-bouncy-castle-icon_23-2150154352.jpg?w=740&t=st=1684468280~exp=1684468880~hmac=6b04fb25b709342f8a9f6394ea8a7a96f7e42bfce90478e87c3a40a0bd5cf0e4',
        'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-cubes-with-letters_23-2149345296.jpg?w=740&t=st=1684468364~exp=1684468964~hmac=b89e00f9a6a079da86b97ee578565185ef6b39d6ee696cbc43e0ced4c33e96b1',
        'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-gaming-controller_23-2149345301.jpg?w=740&t=st=1684468764~exp=1684469364~hmac=72fcdd0a98eb849573c634adccd40dc76ef1fb0da3f19e80ad9ef79f9d4cb21c',
        'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-chess-pieces_23-2149345300.jpg?w=740&t=st=1684469657~exp=1684470257~hmac=2e9e5d53ad83ba14d665c44ae723d81b0d1a062def17ce4f711f5f67a1d61973',
        'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-keyboard_23-2149345308.jpg?w=740&t=st=1684469686~exp=1684470286~hmac=573fb37886bd3c7eb97dff18b60053c365f8fc4f4706fa4a30916cc12a50575a',
        'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-rubik-s-cube_23-2149345313.jpg?1&w=740&t=st=1684469707~exp=1684470307~hmac=ea22afeea7360e9e2b0819a2e9f211232a815b1ea785f07c5de2b503dea5f1e5',
        'https://img.freepik.com/free-psd/infographic-elements-three-dimensional-icon_23-2149740202.jpg?w=740&t=st=1684469821~exp=1684470421~hmac=ae19bdab52454bbabd842fdb82deac1079b334cc00e9985a4f3784cc04c03643',
        'https://img.freepik.com/free-psd/amusement-park-game-icon_23-2150154382.jpg?w=740&t=st=1684470110~exp=1684470710~hmac=2c86498ce4c56feab8eef27412735def8da94ee02e43da6522bfacfce0b96878',
        'https://img.freepik.com/free-psd/amusement-park-plane-icon_23-2150154386.jpg?w=740&t=st=1684470035~exp=1684470635~hmac=71b5f43920e1e9e7f6739a57b32b8e5cff4a49b3b8a5b7548e383cd380f02897'
        // Add more image URLs as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, // Hide dots on small devices
                    
                },
            },
        ],
    };

    const sliderRef = React.useRef(null);

    const handlePause = () => {
        sliderRef.current.slickPause();
    };

    const handlePlay = () => {
        sliderRef.current.slickPlay();
    };

    return (
        <div className="container mx-auto p-4 mt-4 md:mt-6 lg:mt-8">
            <h2 className='text-center font-semibold text-2xl lg:text-3xl mb-4 lg:mb-7'>ToyGenius Gallery</h2>
            <Slider ref={sliderRef} {...settings} className="overflow-hidden">
                {images.map((image, index) => (
                    <div key={index} className="px-2">
                        <img src={image} alt={`Image ${index + 1}`} className="mx-auto rounded-lg" />
                    </div>
                ))}
            </Slider>

            <div className="flex justify-center mt-4">
                <button
                    className="bg-gradient-to-r from-orange-300 to-amber-300 text-black font-bold py-2 px-4 rounded mr-2"
                    onClick={handlePause}
                >
                    Pause
                </button>
                <button
                    className="bg-gradient-to-r from-orange-300 to-amber-300 text-black font-bold py-2 px-4 rounded"
                    onClick={handlePlay}
                >
                    Play
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;