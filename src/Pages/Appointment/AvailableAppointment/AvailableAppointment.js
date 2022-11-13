import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect( () => {
        fetch('appointmentOption.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='mt-10'>
            <p className='text-center text-secondary text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                  appointmentOptions.map(option => <AppointmentOption 
                  key={option._id}
                  option={option}
                  setTreatment={setTreatment}

                  ></AppointmentOption>)  
                }
            </div>
            {
                treatment && 
                <BookingModal 
            treatment={treatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;