import Image from 'next/image';
import variables from '../variables.module.scss';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    
    return (
        <div className={variables.blogContainer}>
            <p>Hello Blog</p>
        </div>
    )
}