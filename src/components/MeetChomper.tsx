import {Carousel} from "jotai/components/Carousel";
import * as React from 'react';

interface MeetChomperProps {}

type MeetChomperState = {
    // count: number; // like this
};

export class MeetChomper extends React.Component<MeetChomperProps, MeetChomperState> {
    static displayName = 'MeetChomper';

    constructor(props: MeetChomperProps) {
        super(props);
    }

    state: MeetChomperState = {
        // count: 0,
    };

    render() {
        return (
            <div className="max-w-6xl grow rounded border-2 border-gray-500 bg-base-100">
                <div className="object-contain" id="stuff-inside-content-box">
                    <div className="mx-auto flex flex-col flex-nowrap p-1 md:grid md:grid-cols-2">
                        <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                            <h1>Meet Chomper</h1>
                        </div>

                        <div className="w-full md:col-span-2 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3">
                            <Carousel />
                        </div>

                        <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
                            <p>
                                Chomper is an adult male Leopard Gecko who we adopted unexpectedly. Chomper&apos;s original
                                owner was a young child who did not know how to properly care for him, and he was not in the best
                                health when we originally got him as a result. With time however, he has recovered and become
                                quite healthy, active, and tame. He is very friendly and enjoys being handled, even choosing
                                to walk out of his tank onto my hand to do so quite frequently!
                            </p>

                            <p>
                                We named him Chomper because though he is a very gentle and friendly reptile, he is
                                quite an aggressive hunter when chasing bugs, with a voracious appetite to match! He
                                lives on a diet of mostly crickets, with a few other feeder insects mixed in for variety.
                                He also receives a multivitamin calcium supplement regularly to ensure he gets all the
                                nutrients he needs.
                            </p>
                        </div>

                        <div className="prose p-2 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 md:items-end">
                            <p>
                                Chomper&apos;s tank is a 40 gallon (long) terrarium, allowing him plenty of space to move around.
                                He has a 90 degree Fahrenheit hot side and a 75 degree Fahrenheit cool side, allowing him to
                                thermoregulate as he pleases. His tank is also equipped with a low-power UVB light, which is not strictly
                                necessary for Leopard Geckos, but is still beneficial for them. The tank&apos;s temperature and humidity
                                levels are monitored by a custom-built digital climate-monitor device, and the tank is cleaned
                                regularly.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
