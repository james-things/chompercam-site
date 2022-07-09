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
        <img className="mx-auto p-1" src='http://174.57.153.211:8080/' alt='Chomper is taking a short break!'/>
    );
  }
}
