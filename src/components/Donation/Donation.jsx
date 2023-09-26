// import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowDonationCard from "./ShowDonationCard";
import { getStoredDonations } from "../../Utility/localStorage";

const Donation = () => {
  const donations = useLoaderData();

  const [giveDonation, setGiveDonation] = useState([]);
  const [displayDonation, setDisplayDonation] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedDonation = getStoredDonations();
    if (donations.length > 0) {
      const donated = [];

      for (const id of storedDonation) {
        const donate = donations.find((donate) => donate.id.toString() === id);
        
        if (donate) {
          donated.push(donate);
          console.log(donated);
        }
      }

      console.log(donations, storedDonation);
      console.log(donated);

      setGiveDonation(donated);
      setDisplayDonation(donated);
    }
  }, [donations]);

  console.log(giveDonation);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto py-5">
        {displayDonation.slice(0, dataLength).map((donation, id) => (
          <ShowDonationCard key={id} donation={donation}></ShowDonationCard>
        ))}
      </div>
      <div className="text-center">
        <div className={dataLength === displayDonation.length ? "hidden" : ""}>
          <button onClick={() => setDataLength(displayDonation.length)} className="btn bg-green-700 text-white text-center">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
