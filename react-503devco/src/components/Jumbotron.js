import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
// import trees from '../assets/trees.jpg';
import carbon from '../assets/CarbonadoNew.png'


const Styles = styled.div`
  .jumbo {
    background: url(${carbon}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 375px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
           
        </Jumbo>
    </Styles>
)