import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Row
} from 'reactstrap';
import Container from 'react-bootstrap/Container';

import { SRLWrapper } from 'simple-react-lightbox';





export const House3 = () => {
    return (


        <Container>
            <Row>
                <CardColumns>
                    <SRLWrapper>
                        <Card><a href='https://i.imgur.com/03mgX9R.jpg' data-attribute="SRL">
                            <CardImg top width="100%" src=" https://i.imgur.com/03mgX9R.jpg" alt="Anotha One" /> </a>
                            <CardBody>
                                <CardTitle>11425 SW 14th St.</CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText>Completely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                                <Button outline color="secondary"><a href='/Restorations'> All Projects</a></Button>
                            </CardBody>
                        </Card>

                        <Card> <a href='https://i.imgur.com/Rq3V4ey.jpg' data-attribute="SRL">
                            <CardImg top width="100%" src="https://i.imgur.com/Rq3V4ey.jpg" alt="Card image cap" /> </a>
                            <CardBody>
                                <CardTitle>11425 SW 14th St.</CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText>Completely renovated, New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                                {/* <Button>Button</Button> */}
                            </CardBody>
                        </Card>

                        <Card><a href='https://i.imgur.com/rwAyBU8.jpg' data-attribute="SRL">
                            <CardImg top width="100%" src="https://i.imgur.com/rwAyBU8.jpg" alt="Card image cap" /></a>
                            <CardBody>
                                <CardTitle>11425 SW 14th St.</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Open floor plan on large level lot.  New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                                {/* <Button>Button</Button> */}
                            </CardBody>
                        </Card>

                        <Card><a href='https://i.imgur.com/ia8Rt0z.jpg' data-attribute="SRL">
                            <CardImg top width="100%" src="https://i.imgur.com/ia8Rt0z.jpg" alt="Card image cap" /></a>
                            <CardBody>
                                <CardTitle>11425 SW 14th St.</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                                {/* <Button>Button</Button> */}
                            </CardBody>
                        </Card>
                        <Card><a href='https://i.imgur.com/6Ejidc0.jpg' data-attribute="SRL">
                            <CardImg top width="100%" src="https://i.imgur.com/6Ejidc0.jpg" alt="Card image cap" /></a>
                            <CardBody>
                                <CardTitle>11425 SW 14th St.</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                                {/* <Button>Button</Button> */}
                            </CardBody>
                        </Card>
                        <Card><a href='https://i.imgur.com/63bbIHY.jpg' data-attribute="SRL">
                            <CardImg top width="100%" src="https://i.imgur.com/63bbIHY.jpg" alt="Card image cap" /></a>
                            <CardBody>
                                <CardTitle>11425 SW 14th St.</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                                {/* <Button>Button</Button> */}
                            </CardBody>
                        </Card>
                    </SRLWrapper>

                </CardColumns>
            </Row>
        </Container>


    );
};

