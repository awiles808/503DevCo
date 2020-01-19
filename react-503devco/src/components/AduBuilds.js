import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardColumns, Container,
    CardSubtitle, CardBody, ButtonToggle
} from 'reactstrap';
import { Link } from 'react-router-dom';





export const AduBuilds = () => {
    return (
        <Container>
            <CardColumns>
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
                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/LfchCbx.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <ButtonToggle a href='/House1' color="secondary">Full Gallery</ButtonToggle>
                    </CardBody>
                </Card>
            </CardColumns>
        </Container>
    );
};


