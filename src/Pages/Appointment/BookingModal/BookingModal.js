import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch}) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext);

  const handelBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const fname = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
        appointmentDate: date,
        treatment: name,
        patient: fname,
        slot,
        email,
        phone 
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        setTreatment(null);
        toast.success(`${date} is Booking Confirmed`);
        refetch()
      }
      else{
        toast.error(data.message)
      }
    })

   
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 text-primary"
          >
            &#10060;
          </label>
          <h3 className="text-2xl font-bold">{name}</h3>
          <form onSubmit={handelBooking} className="grid grid-cols-1 gap-4 mt-5">
            <input type="text" value={date} className="input input-bordered w-full" disabled/>
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot}
                key={i}
                >{slot}</option>
              ))}
            </select>
            <input name="name" type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full" disabled/>
            <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full"/>
            <input name="email" type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" disabled/>
            <input type="submit" className="w-full btn btn-accent"value="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
