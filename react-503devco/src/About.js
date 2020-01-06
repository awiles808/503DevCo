import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { Jumbotron as Jumbo } from 'react-bootstrap';
// import carbon from './assets/CarbonadoNew.png';
import banner from './assets/Banner.png'


const Styles = styled.div` 
 .jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 375px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }


#call-to-action {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) fixed center center;
  background-size: cover;
  padding: 90px 0;
}

#call-to-action .cta-title {
  color: #fff;
  font-size: 28px;
  font-weight: 800;
}

#call-to-action .cta-text {
  color: #fff;
  font-size: 18px;
  font-weight: 450;
}

@media (min-width: 769px) {
  #call-to-action .cta-btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

#call-to-action .cta-btn {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid #fff;
  color: #fff;
}

#call-to-action .cta-btn:hover {
  background: #134578;
  border: 2px solid #134578;
}
 
`;


export const About = () =>  (
        <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      
    </Jumbo>
                <div>
                <Container>
                
       
        <h2>All About 503</h2>
        
        <p>Lorem ipsum dolor amet marfa paleo pok pok intelligentsia disrupt. Pinterest microdosing keffiyeh, quinoa chicharrones skateboard shabby chic chillwave kale chips man braid. Stumptown migas mustache snackwave organic drinking vinegar artisan distillery. Occupy raclette tumeric drinking vinegar raw denim. Cred humblebrag lumbersexual mlkshk trust fund.

Hot chicken single-origin coffee helvetica, letterpress cred green juice cornhole. drinking vinegar Venmo subway tile heirloom, cloud bread lo-fi XOXO tofu asymmetrical roof party tote bag ennui. Intelligentsia occupy af VHS vexillologist quinoa schlitz, humblebrag iceland vice lumbersexual. Cred organic microdosing cliche bushwick bitters bicycle rights everyday carry street art 8-bit keytar pork belly hammock echo park.

Green juice trust fund selfies meggings migas, kogi sartorial 90's jean shorts keffiyeh. Seitan fashion axe gochujang shoreditch taiyaki waistcoat letterpress, wayfarers retro thundercats quinoa gastropub. Synth drinking vinegar unicorn selvage dreamcatcher hot chicken tofu keytar cronut forage messenger bag lomo. Activated charcoal next level celiac, hell of craft beer normcore 8-bit flexitarian irony franzen keytar XOXO VHS mumblecore. Fingerstache meditation cloud bread, cornhole polaroid tattooed normcore slow-carb enamel pin leggings chia. Microdosing ugh kickstarter literally food truck cred narwhal pop-up +1 fanny pack offal fixie austin.

Williamsburg letterpress butcher hammock ennui tofu la croix meditation 90's. Cloud bread cred direct trade, air plant etsy +1 artisan. Woke tilde tbh, poutine authentic hella tumblr microdosing chambray migas chicharrones cardigan. Poutine bushwick sriracha pitchfork pok pok deep v yr vexillologist venmo. Everyday carry brooklyn cornhole, sartorial microdosing activated charcoal adaptogen prism jianbing unicorn.

I bet you’re still using Bootstrap too…

</p>
</Container>


                <section id="call-to-action">
                        <div class="container wow fadeIn">
                                <div class="row">
                                        <div class="col-lg-9 text-center text-lg-left">
                                                <h3 class="cta-title">SERVING THE PORTLAND METRO AREA</h3>
                                                <p class="cta-text">
                                                        Do you want to sell your home fast with no real estate commissions, no appraisals, no inspection and no other fees? We buy all types of homes in any condition throughout the Portland Metro area! We are a local company looking to provide Portland area homeowners a fair and reliable way to sell their home fast and in "AS IS" condition. Contact us today for a No Obligation FAIR PRICED OFFER within 24 hours! You can either call us at 503-927-4893 or fill out our online property information form.</p>
                                        </div>
                                        <div class="col-lg-3 cta-btn-container text-center">
                                                <a class="cta-btn align-middle" href="https://www.503cash.com">Contact Us</a>
                                        </div>
                                </div>

                        </div>
                </section>



</div>

 <Container>
       
        <p>Lorem ipsum dolor amet marfa paleo pok pok intelligentsia disrupt. Pinterest microdosing keffiyeh, quinoa chicharrones skateboard shabby chic chillwave kale chips man braid. Stumptown migas mustache snackwave organic drinking vinegar artisan distillery. Occupy raclette tumeric drinking vinegar raw denim. Cred humblebrag lumbersexual mlkshk trust fund.

Hot chicken single-origin coffee helvetica, letterpress cred green juice cornhole. drinking vinegar Venmo subway tile heirloom, cloud bread lo-fi XOXO tofu asymmetrical roof party tote bag ennui. Intelligentsia occupy af VHS vexillologist quinoa schlitz, humblebrag iceland vice lumbersexual. Cred organic microdosing cliche bushwick bitters bicycle rights everyday carry street art 8-bit keytar pork belly hammock echo park.

Green juice trust fund selfies meggings migas, kogi sartorial 90's jean shorts keffiyeh. Seitan fashion axe gochujang shoreditch taiyaki waistcoat letterpress, wayfarers retro thundercats quinoa gastropub. Synth drinking vinegar unicorn selvage dreamcatcher hot chicken tofu keytar cronut forage messenger bag lomo. Activated charcoal next level celiac, hell of craft beer normcore 8-bit flexitarian irony franzen keytar XOXO VHS mumblecore. Fingerstache meditation cloud bread, cornhole polaroid tattooed normcore slow-carb enamel pin leggings chia. Microdosing ugh kickstarter literally food truck cred narwhal pop-up +1 fanny pack offal fixie austin.

Williamsburg letterpress butcher hammock ennui tofu la croix meditation 90's. Cloud bread cred direct trade, air plant etsy +1 artisan. Woke tilde tbh, poutine authentic hella tumblr microdosing chambray migas chicharrones cardigan. Poutine bushwick sriracha pitchfork pok pok deep v yr vexillologist venmo. Everyday carry brooklyn cornhole, sartorial microdosing activated charcoal adaptogen prism jianbing unicorn.

I bet you’re still using Bootstrap too…

</p>
</Container>

</Styles>


)