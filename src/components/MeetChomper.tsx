import * as React from 'react';

interface MeetChomperProps {}

type MeetChomperState = {
    count: number; // like this
};

export class MeetChomper extends React.Component<MeetChomperProps, MeetChomperState> {
    static displayName = 'MeetChomper';

    constructor(props: MeetChomperProps) {
        super(props);
    }

    state: MeetChomperState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div className="flex">
                <div className="">
                    <div className="font-bold">
                        Coming soon!
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. In eu mi bibendum neque egestas congue. Adipiscing bibendum est ultricies integer
                        quis. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Sit amet consectetur adipiscing
                        elit pellentesque habitant. Ultricies mi eget mauris pharetra et ultrices. Elementum nisi quis eleifend
                        quam adipiscing vitae proin.
                    </div>

                    <div>
                        Quis commodo odio aenean sed adipiscing diam donec adipiscing. Turpis cursus in hac habitasse platea.
                        Morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat. Arcu vitae elementum
                        curabitur vitae nunc sed velit dignissim. Fermentum dui faucibus in ornare quam. Ut ornare lectus sit
                        amet est placerat in. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.
                    </div>

                    <div>
                        Quam quisque id diam vel quam elementum pulvinar etiam. Quis imperdiet massa tincidunt nunc pulvinar
                        sapien et ligula ullamcorper. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
                        Facilisis sed odio morbi quis commodo odio aenean sed. Maecenas ultricies mi eget mauris pharetra et
                        ultrices neque. Proin fermentum leo vel orci porta non pulvinar. Augue lacus viverra vitae congue eu
                        consequat ac felis. Nibh praesent tristique magna sit.
                    </div>

                    <div>
                        Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Nulla at volutpat diam ut. Posuere
                        morbi leo urna molestie at elementum. Egestas integer eget aliquet nibh praesent tristique magna. Nulla
                        aliquet enim tortor at auctor urna nunc. Cum sociis natoque penatibus et magnis dis parturient. Mauris
                        sit amet massa vitae tortor condimentum. In tellus integer feugiat scelerisque varius morbi enim.
                        Feugiat sed lectus vestibulum mattis.
                    </div>
                </div>
            </div>
        );
    }
}
