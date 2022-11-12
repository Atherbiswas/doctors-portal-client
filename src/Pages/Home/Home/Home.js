import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import InfoCards from '../Info/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
            <AppointmentCard></AppointmentCard>
        </div>
    );
};

export default Home;