
import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns, Container,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';





export const Restorations = () => {
    return (
        <Container>
            <CardColumns>
                <Card><Link to='/House1'>
                    <CardImg top width="100%" src="https://i.imgur.com/03mgX9R.jpg" alt="Card image cap" /> </Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Completely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        <Button><a href='/House1'>Full Gallery</a></Button>
                    </CardBody>

                </Card>
                <Card><Link to='/House2'>
                    <CardImg top width="100%" src="https://i.imgur.com/d19WA3c.jpg" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        {/* <Button>Button</Button> */}
                    </CardBody>
                </Card>
                <Card><Link to='/House3'>
                    <CardImg top width="100%" src="https://i.imgur.com/LfchCbx.jpg" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button><a href='/House3'>Full Gallery</a></Button>
                    </CardBody>
                </Card>
                <Card><Link to='/House1'>
                    <CardImg top width="100%" src="https://i.imgur.com/03mgX9R.jpg" alt="Card image cap" /> </Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Completely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        {/* <Button>Button</Button> */}
                    </CardBody>

                </Card>
                <Card><Link to='/House2'>
                    <CardImg top width="100%" src="https://i.imgur.com/d19WA3c.jpg" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        {/* <Button>Button</Button> */}
                    </CardBody>
                </Card>
                <Card><Link to='/House3'>
                    <CardImg top width="100%" src="https://i.imgur.com/LfchCbx.jpg" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        {/* <Button><Link to='/House1'>Button</Link></Button> */}
                    </CardBody>
                </Card>
            </CardColumns>
        </Container>
    );
};





















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
