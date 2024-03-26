import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "@/components/home/sectionTitle";

const Caroussel = (props) => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="p-1">
                <SectionTitle
                    id="wall"
                    pretitle="THE TEAM"
                    title="Meet our team">
                </SectionTitle>


                <div className="slider-container">

                    <Slider {...settings}>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Marouane KHOUFID</a>
                            <p className="text-gray-500 text-sm">Chapo</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Camille CABRI</a>
                            <p className="text-gray-500 text-sm">Responsable communication</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Gabriel PAPALIA</a>
                            <p className="text-gray-500   text-sm">Manager du projet "Catching spirits"</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Margaux PIERRE</a>
                            <p className="text-gray-500   text-sm">Manager du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Camille MIRIO</a>
                            <p className="text-gray-500   text-sm">___ du projet AEG</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Phuong Mai NGUYEN</a>
                            <p className="text-gray-500   text-sm">Développeuse web</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Hind NAOUI</a>
                            <p className="text-gray-500   text-sm">___ du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Diego FIEUX</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Mathieu VASSAL</a>
                            <p className="text-gray-500   text-sm">______</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Tessa ROCHÉ-QUARRÉ</a>
                            <p className="text-gray-500   text-sm">Manager du projet "site web"</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Zhanhe ZHANG</a>
                            <p className="text-gray-500   text-sm">_______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Romaric REBOUYS</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Arthur FRINDEL</a>
                            <p className="text-gray-500   text-sm">______</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Kiady RAJOELISO</a>
                            <p className="text-gray-500   text-sm">Manager du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Florian BELLUS</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Hugo BOUSSARD</a>
                            <p className="text-gray-500   text-sm">_______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Adrien SAVOYE</a>
                            <p className="text-gray-500   text-sm">_______</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Yucel Can CIRACI</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Rémi GARCIA</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Ibrahima BARRY</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Gabriel FEDOU</a>
                            <p className="text-gray-500   text-sm">Tech lead du projet "Catching spirits"</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Augustin LAURENT</a>
                            <p className="text-gray-500   text-sm">Support IT</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Gabriel SAUNDERS</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Mohamed BEDJAOUI</a>
                            <p className="text-gray-500   text-sm">______</p>

                        </div>

                    </Slider>


                </div>


            </div>
        </>
    );
}

export default Caroussel;