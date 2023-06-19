import * as React from 'react';

interface MediaEmbedProps {}

type MediaEmbedState = {
    count: number; // like this
};

export class MediaEmbed extends React.Component<MediaEmbedProps, MediaEmbedState> {
    static displayName = 'MediaEmbed';

    // constructor(props: MyProps) {
    //   super(props);
    // }

    state: MediaEmbedState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {

    return (
        <div className="rounded-box max-w-6xl grow rounded border-2 border-gray-500 bg-base-100">
            <img
              className="mx-auto aspect-video p-1"
              src='http://73.33.117.2:8080/0.mjpeg'
              alt='Chomper is taking a short break!'
            />
        </div>
    );
    }
}
