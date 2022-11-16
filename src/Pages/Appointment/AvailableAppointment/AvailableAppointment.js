import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
    })
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
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;