// import React from 'react';

import Swal from "sweetalert2";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  const navigate = useNavigate();
  const url = `https://car-doctor-server-xi-one.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBooking(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (proceed) {
          fetch(`https://car-doctor-server-xi-one.vercel.app/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data)
              if (data.deletedCount > 0) {
                const remaining = bookings.filter(
                  (booking) => booking._id !== id
                );
                setBooking(remaining);
              }
            });
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleConfirm = (id) => {
    fetch(`https://car-doctor-server-xi-one.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);

          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";

          const newBookings = [updated, ...remaining];
          setBooking(newBookings);
        }
      });
  };
  return (
    <div>
      {/* <h2>Available Booking data: {booking.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
