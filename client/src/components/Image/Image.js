import React from 'react';
import { Image } from 'semantic-ui-react';

const ImageComponent = (props) => {
    console.log(props);
    return (
        <Image {...props}/>
    )
};

export default ImageComponent;