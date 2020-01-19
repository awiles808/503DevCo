import React from "react";
import styled from 'styled-components';
import ButtonToggle from 'react-bootstrap/Button'




const Styles = styled.div`
#services {
  background: #fff;
  background-size: cover;
  padding: 10px 0 60px 0;
}

#services .box {
  padding: 30px 20px;
  margin-bottom: 30px;
  text-align: center;
  border: 1px solid #e6e6e6;
  height: 200px;
  position: relative;
  background: #fafafa;
}

#services .icon {
  position: absolute;
  top: -36px;
  left: calc(50% - 36px);
  transition: 0.2s;
  border-radius: 50%;
  border: 6px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 72px;
  height: 72px;
  background:#fff;
}

#services .icon a {
  display: inline-block;
}

#services .icon i {
  color: #fff;
  font-size: 24px;
}

#services .box:hover .icon {
  background: #fff;
  border: 2px solid #134578;
}

#services .box:hover .icon i {
  color: #134578;
}

#services .box:hover .icon a {
  color: #134578;
}

#services .title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

#services .title a {
  color: #111;
}

#services .description {
  font-size: 14px;
  line-height: 24px;
}


`;



export const Contact = () => {
    return (
        <Styles>
            <div>

                <section id="services">
                    <div class="container wow fadeIn">

                        <div class="row">
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="box">
                    <div class="icon"><a href="http://google.com"><i class="fa fa-home"></i></a></div>
                    <h4 class="title"><a href="http://google.com">Sell Your Home</a></h4>
                                    <p class="description">Sell Your Home Fast and in "As Is" Condition
              Follow the home selling steps below and sell to 503 Development Co. today!</p>
                    {/* <Button><a href="http://503cash.com"> All Projects</a></Button> */}
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="box">
                                    {/* <div class="icon"><a href="contact"><i class="fa fa-phone"></i></a></div> */}
                                    <h4 class="title"><a href="contact">Call Us</a></h4>
                                    <p class="description">Call our office at 503-927-4893 or send us your property information using our confidential Seller Questionnaire form on this website.</p>
                    <ButtonToggle a href='wwww.503cash.com' color="success">Call Today</ButtonToggle> 
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="box">
                                    {/* <div class="icon"><a href="contact"><i class="fa fa-pencil-square-o "></i></a></div> */}
                                    <h4 class="title"><a href="contact">Discussion</a></h4>
                                    <p class="description">A 503 Development Co. representative will contact you within 24 hours of submitting your online seller questionnaire to discuss purchasing your home.</p>
                    {/* <Button><a href="http://503cash.com"> All Projects</a></Button> */}
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="box">
                                    {/* <div class="icon"><a href="contact"><i class="fa fa-calendar"></i></a></div> */}
                                    <h4 class="title"><a href="contact">Appointment</a></h4>
                                    <p class="description">If and when you choose to accept our offer, the closing will be scheduled and you will be only days away from receiving your home sale proceeds.</p>
                                {/* <Button><a href="http://503cash.com"> All Projects</a></Button> */}
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="box">
                                    {/* <div class="icon"><a href="contact"><i class="fa fa-handshake-o"></i></a></div> */}
                                    <h4 class="title"><a href="contact">SOLD</a></h4>
                                    <p class="description">CONGRATULATIONS! Your house is sold and you are now able to move on with your life within only a FEW DAYS, not months!</p>
                                {/* <Button><a href="http://503cash.com"> All Projects</a></Button> */}
                                </div>
                            </div>


                        </div>

                    </div>
                </section>
            </div>
        </Styles>
    );
}
