import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns, Container,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';





export const Team = () => {
    return (
        <Container>
            <CardColumns>
                <Card><Link to='/House1'>
                    <CardImg top width="100%" src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/43315847_10215911731641610_6944181945412616192_o.jpg?_nc_cat=103&_nc_oc=AQnsUw_pmqjBvQF1kcztHax4prxP1PS0Y_WxCrYKIwQo2nAU-vdM3dyWqzw0V620jcw&_nc_ht=scontent.fapa1-1.fna&oh=fd4105294450cb185b1f935ca32969c5&oe=5EB223EA" alt="Card image cap" /> </Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Completely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        {/* <Button>Button</Button> */}
                    </CardBody>

                </Card>
                <Card><Link to='/House2'>
                    <CardImg top width="100%" src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/41671151_10217421601714269_5633179505142005760_n.jpg?_nc_cat=110&_nc_oc=AQnXrsxWpbDly0r9Jg8cbPL0fqnk-bnyk3M7C-AaKEGVosI-ARg23NUFG3wHrPM_b0U&_nc_ht=scontent.fapa1-1.fna&oh=a1fc63da3f1ac3a57a3149668049b87d&oe=5EA8D03B" alt="Card image cap" /></Link>
                    <CardBody>
                        <CardTitle>11425 SW 14th St.</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>TCompletely renovated, contemporary 3bed/2bath home with open floor plan on large level lot. No stone left unturned. Custom kitchen and baths, granite counters and modern touches. New hardwoods and carpet throughout. Brand new roof, electrical, plumbing, furnace, water heater, and all new stainless appliances. All new fixtures throughout. Conveniently located near downtown Beaverton.</CardText>
                        {/* <Button>Button</Button> */}
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://instagram.fapa1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/69906694_696382237439898_7872829925264514084_n.jpg?_nc_ht=instagram.fapa1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uZ-nbZmASEsAX8xRtmU&oh=dd6936e5f2574d66ebd60938e0266e6f&oe=5E8E08B6" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button><Link to='/House1'>Button</Link></Button>
                    </CardBody>
                </Card>
            </CardColumns>
        </Container>
    );
};


