import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment}) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handelBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
        appointmentDate: date,
        treatment: name,
        patient: name,
        slot,
        email,
        phone 
    }
    console.log(booking);
    setTreatment(null);
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
            <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full"/>
            <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full"/>
            <input name="email" type="email" placeholder="Email" className="input input-bordered w-full"/>
            <input type="submit" className="w-full btn btn-accent"value="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
