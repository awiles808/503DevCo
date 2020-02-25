import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardColumns, Container,
    CardSubtitle, CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';





export const AduBuilds = () => {
    return (
        <Container>
            <CardColumns>
                <Card><Link to='/Pomona'>
                    <CardImg top width="100%" src="https://i.imgur.com/VNITAHl.jpg" alt="Card image cap" /> </Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Completely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        
                    </CardBody>

                </Card>
                <Card><Link to='/Sw61Av10935'>
                    <CardImg top width="100%" src="https://i.imgur.com/O7C4SKv.jpg" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                       
                    </CardBody>
                </Card>
                <Card><Link to ='/Sw61Av10923'>
                    <CardImg top width="100%" src="https://i.imgur.com/LfchCbx.jpg" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    </CardBody>
                </Card>

            </CardColumns>
        </Container>
    );
};


