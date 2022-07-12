import * as React from 'react';
// import Image from 'next/future/image'

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
    // http://192.168.50.79:8080/0.mjpeg
    // http://174.57.153.211:8080/
    return (
        <img className="mx-auto aspect-video p-1" src='http://174.57.153.211:8080/0.mjpeg' alt='Chomper is taking a short break!'/>
    );
  }
}
