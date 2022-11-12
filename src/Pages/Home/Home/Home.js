import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import InfoCards from '../Info/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
            <AppointmentCard></AppointmentCard>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;