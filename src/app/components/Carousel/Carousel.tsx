import { useRef, useState } from 'react';
import './Carousel.scss'
import { start } from 'repl';

export default function Carousel({ ...props }) {
    const {
        images,
        captions,
        selHeight,
        automatic,
        interval } = props


    const carouselId = useRef<any | undefined>()

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutomatic, setAutomatic] = useState(automatic)


    if (isAutomatic) {


        carouselId.current = setInterval(() => {

            carouselTimer();

        }, interval);
    }

    function carouselTimer() {
        onNextClick();
    }

    function pauseCarousel() {

        console.log('pause')
        clearInterval(carouselId.current);


    }

    function onPreviousClick() {
        const previous = currentSlide - 1;
        setCurrentSlide(previous < 0 ? images!.length - 1 : previous);

    }

    function onNextClick() {
        const next = currentSlide + 1;
        setCurrentSlide(next === images!.length ? 0 : next);

    }

    function dotSelect(n: number) {
        setCurrentSlide(n);
    }

    function startTimer() {



    }

    return (
        <div className="carousel-container" style={{ height: selHeight + 'px' }}>
            <div className="carousel" ref={carouselId}  >



                {images && images.map((item: any, index: number) => {
                    if (index === currentSlide) {
                        return (

                            <img key={index} src={item} className="slide fade" />
                        )
                    }
                })}


                <a className="prev" onClick={onPreviousClick}>&#10094;</a>
                <a className="next" onClick={onNextClick}>&#10095;</a>
            </div>



            <div className="text-center">

                {images && images.map((item: any, index: number) => {
                    return (<span className={index === currentSlide ? 'dot active' : 'dot'} key={index} onClick={() => dotSelect(index)}></span>)
                })}


            </div>
        </div>
    )
}