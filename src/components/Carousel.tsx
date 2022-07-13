import * as React from 'react';

interface CarouselProps {}

type CarouselState = {
    count: number; // like this
};

export class Carousel extends React.Component<CarouselProps, CarouselState> {
    static displayName = 'Carousel';

    constructor(props: CarouselProps) {
        super(props);
    }

    state: CarouselState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div className="p-2">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
}
