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
                    <div id="1" className="carousel-item relative w-full">
                        <img src="/1.jpg" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#5" className="btn btn-circle">❮</a>
                            <a href="#2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="2" className="carousel-item relative w-full">
                        <img src="/2.jpg" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#1" className="btn btn-circle">❮</a>
                            <a href="#3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="3" className="carousel-item relative w-full">
                        <img src="/3.jpg" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#2" className="btn btn-circle">❮</a>
                            <a href="#4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="4" className="carousel-item relative w-full">
                        <img src="/4.jpg" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#3" className="btn btn-circle">❮</a>
                            <a href="#5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="5" className="carousel-item relative w-full">
                        <img src="/5.jpg" className="w-full" alt="default"/>
                        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#4" className="btn btn-circle">❮</a>
                            <a href="#1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
}
