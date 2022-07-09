import * as React from 'react';

interface AboutPageProps {}

type AboutPageState = {
    count: number; // like this
};

export class AboutPage extends React.Component<AboutPageProps, AboutPageState> {
    static displayName = 'AboutPage';

    constructor(props: AboutPageProps) {
        super(props);
    }

    state: AboutPageState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque egestas congue. Adipiscing bibendum est ultricies integer quis. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Sit amet consectetur adipiscing elit pellentesque habitant. Ultricies mi eget mauris pharetra et ultrices. Elementum nisi quis eleifend quam adipiscing vitae proin. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Turpis cursus in hac habitasse platea. Morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Fermentum dui faucibus in ornare quam. Ut ornare lectus sit amet est placerat in. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.

                Quam quisque id diam vel quam elementum pulvinar etiam. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Facilisis sed odio morbi quis commodo odio aenean sed. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Proin fermentum leo vel orci porta non pulvinar. Augue lacus viverra vitae congue eu consequat ac felis. Nibh praesent tristique magna sit. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Nulla at volutpat diam ut. Posuere morbi leo urna molestie at elementum. Egestas integer eget aliquet nibh praesent tristique magna. Nulla aliquet enim tortor at auctor urna nunc. Cum sociis natoque penatibus et magnis dis parturient. Mauris sit amet massa vitae tortor condimentum. In tellus integer feugiat scelerisque varius morbi enim. Feugiat sed lectus vestibulum mattis.

                Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Diam ut venenatis tellus in metus vulputate eu scelerisque. Euismod in pellentesque massa placerat. Vitae nunc sed velit dignissim. Sit amet porttitor eget dolor morbi non arcu risus. Id cursus metus aliquam eleifend mi in. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Faucibus et molestie ac feugiat sed lectus. Ullamcorper eget nulla facilisi etiam dignissim. Eget dolor morbi non arcu risus quis varius. Consectetur purus ut faucibus pulvinar elementum integer enim.

                Scelerisque fermentum dui faucibus in ornare quam viverra orci. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Sed pulvinar proin gravida hendrerit. Elementum nibh tellus molestie nunc non blandit massa enim. Aliquam nulla facilisi cras fermentum odio eu. Etiam tempor orci eu lobortis. In iaculis nunc sed augue lacus viverra. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Nulla aliquet enim tortor at. Aliquam purus sit amet luctus venenatis lectus magna. Convallis tellus id interdum velit laoreet id donec. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Lacus sed turpis tincidunt id aliquet. Cras pulvinar mattis nunc sed blandit. In pellentesque massa placerat duis ultricies. Vitae semper quis lectus nulla at volutpat diam. Massa eget egestas purus viverra accumsan in. In ornare quam viverra orci sagittis eu volutpat. Risus ultricies tristique nulla aliquet enim tortor at auctor.
            </div>
        );
    }
}
