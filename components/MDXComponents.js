import Image from 'next/image';

function RoundedImage(props) {
    return <Image alt={props.alt} {...props} />;
}

const MDXComponents = {
    Image: RoundedImage,
}

export default MDXComponents;