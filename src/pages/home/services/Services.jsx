// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-xi-one.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-8">
      <div className="space-y-3">
        <h1 className="text-xl text-orange-500 font-bold text-center">
          Services
        </h1>
        <h2 className="text-5xl font-bold text-center">Our Services Area</h2>
        <p className="text-center">
          The Mejority Have Suffered Alteration In Some From, By Injected Humour
          or Randomised <br></br> Wards which dont look even Slightly
          Beliveable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
