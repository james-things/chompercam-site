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
            <div className="rounded-box max-w-6xl grow rounded border-2 border-gray-500 bg-base-100">
                <div id="stuff-inside-content-box">
                    <div className="mx-auto flex flex-col flex-nowrap p-1 md:grid md:grid-cols-2">
                        <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                            <h1>Meet Chomper</h1>
                        </div>

                        <div className="w-full md:col-span-2 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3">
                            <Carousel />
                        </div>

                        <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
                            <p>
                                Chomper is a male Leopard Gecko who we believe is about two years old.
                                We didn&apos;t plan on getting him, but one day we came across someone
                                who was looking to give him away. He was skinny and had lost most of his coloring,
                                so we took him in.
                            </p>

                            <p>
                                Despite his frail stature, as soon as we put some crickets in his new tank
                                he leapt into action and ate them one by one with an aggressive &quot;chomp,&quot; and
                                with that he had his name. Today, Chomper is no longer skinny and unhealthy.
                                He is now healthy and slowly regaining his coloring over time.
                            </p>

                            <p>
                                Initially, Chomper was suffering from Metabolic Bone Disease, which
                                a common occurrence in Leopard Geckos when they do not get adequate nutrition.
                                With this disease, the reptile&apos;s bones become softer and weaker, and eventually they
                                become unable to properly support their own weight, as was the case with Chomper.
                            </p>
                        </div>

                        <div className="prose p-2 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 md:items-end">
                            <p>
                                With proper supplementation and well-regulated temperature levels however, he has
                                almost entirely recovered at this point. He used to be very wobbly and would stand
                                with his belly on the ground, and now he is almost entirely wobble-free and able to
                                stand and walk around just fine!
                            </p>

                            <p>
                                While Leopard Geckos are not known to be especially intelligent, Chomper still has
                                a surprising amount of personality and has shown some capacity for simple learning.
                                He was very shy at first, but with time, he has learned to trust us as his keepers 
                                and enjoys crawling out of his tank to be handled.
                            </p>

                            <p>
                                It really has been quite fascinating learning about reptiles through Chomper!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
