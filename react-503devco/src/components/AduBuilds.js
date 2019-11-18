import React from "react";
// import ReactDOM from "react-dom"
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
    
    "https://uc5aea32e51b01743a547941f2e7.previews.dropboxusercontent.com/p/thumb/AAk66NxH_aRIqQOQZUiPyN-Ikj0kjmU4JWvcukVMYCZz8dBuIcDa-4t_QqmSuKWU8lV9SR8BCvEOt3OiPEpuCfDEATbzDa-F47GbdCeDaY9pdRyO75Ra2L2PFKoxrTIHyuSjHFSS8CmyB05KLLWmncMEbWelXGZ6cSo5opxnvdXk5cCLhwB4kNmFol1YqHzTDbeblR24TfrGwuLG9XLYMcm7SMncI9KPmNhGUB774XM4y0yma7BqwWvOK0XhWQigkUZ1O2VsNKSQMrSGo0GHRAFcxIM5PhKtTB1pHwWP4NKQPIzvsantMMC5eajrVj_dd-iuSK2ZO4pvqZPUzbPtmFPipx89vgjJE2c4ZLvYptueJJ-6HGyTk1VjwlbPmqMV443eFWDeGd2mBq8N0KL3ZM710dMx5q1hwkTAb1l8fj0PKhuQ-iPZrXqfhgTtAse5l5-Z0y1diLeq38Uc2qEPidr3/p.jpeg?fv_content=true&size_mode=5",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

export const AduBuilds = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        },10000000000);
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
// const rootElement = document.getElementById("root");
// ReactDOM.render(<New Builds />, rootElement);
