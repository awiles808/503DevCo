
import React from "react";
// import ReactDOM from "react-dom"
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [

    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
    "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

];

export const Flips = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 10000000000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <Gallery
            style={{
                background: "black",
                height: "100vh",
                width: "100vw"
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {images.map(image => (
                <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
        </Gallery>
    );
}



































// import React from "react";
// // import ReactDOM from "react-dom"
// import { Gallery, GalleryImage } from "react-gesture-gallery";

// const images = [

//     "https://i.imgur.com/LKrq1Sh.jpg",
//     "https://i.imgur.com/d19WA3c.jpg",
//     "https://i.imgur.com/9zBvXjN.jpg",
//     "https://i.imgur.com/ZhHrsiw.jpg",
//     "https://i.imgur.com/oEi7TJN.jpg",
//     "https://i.imgur.com/ZNhXJLD.jpg",
//     "https://i.imgur.com/jXN1v8g.jpg",
//     "https://i.imgur.com/zQMssqw.jpg",
//     "https://i.imgur.com/nMMjXza.jpg",
//     "https://i.imgur.com/u0bU2B0.jpg",
//     "",
//     "",
//     "",
//     "",
// ];

// export const Flips = () => {
//     const [index, setIndex] = React.useState(0);

//     React.useEffect(() => {
//         const timer = setInterval(() => {
//             if (index === 4) {
//                 setIndex(0);
//             } else {
//                 setIndex(prev => prev + 1);
//             }
//         }, 10000000000);
//         return () => clearInterval(timer);
//     }, [index]);

//     return (
//         <Gallery
//             style={{
//                 background: "black",
//                 height: "100vh",
//                 width: "100vw"
//             }}
//             index={index}
//             onRequestChange={i => {
//                 setIndex(i);
//             }}
//         >
//             {images.map(image => (
//                 <GalleryImage objectFit="contain" key={image} src={image} />
//             ))}
//         </Gallery>
//     );
// }
// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<New Builds />, rootElement);
