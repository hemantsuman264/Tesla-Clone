import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
    <Section
    title="Model S"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-s.jpg"
    leftBtn="Custom Order"
    rightBtn="Existing Inventory"
     />

    <Section
    title="Model Y"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-y.jpg"
    leftBtn="Custom Order"
    rightBtn="Existing Inventory"
     />    

    <Section
    title="Model 3"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-3.jpg"
    leftBtn="Custom Order"
    rightBtn="Existing Inventory"
     /> 

    <Section
    title="Model X"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-x.jpg"
    leftBtn="Custom Order"
    rightBtn="Existing Inventory"
     /> 

    <Section
    title="Lowest Cost Solar Panels in America"
    description="Money-back guarantee"
    backgroundImg="solar-panel.jpg"
    leftBtn="Order Now"
    rightBtn="Learn More"
     />   

    <Section
    title="Solar for New Roofs"
    description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
    backgroundImg="solar-roof.jpg"
    leftBtn="Order Now "
    rightBtn="Learn More"
     />                      

    <Section
    title="Accessories"
    description="Order Online for Touchless Delivery"
    backgroundImg="accessories.jpg"
    leftBtn="Shop Now"
    rightBtn=""
     />   


    </Container>
  )
}

export default Home;

//style div/container
const Container = styled.div`
height: 100vh;
`