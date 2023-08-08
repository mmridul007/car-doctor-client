// import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      date,
      email,
      img,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch("https://car-doctor-server-xi-one.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleBooking}
        className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mb-8 mt-8"
      >
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">
            Order Details:{title}
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={"$" + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Now"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
