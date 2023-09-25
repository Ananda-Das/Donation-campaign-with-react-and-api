import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";

const DonationCards = () => {
  const [cardData, setCardData] = useState([]);



  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  // console.log('object');

  return (
    <div>
      <div className="grid lg:grid-cols-4 px-24 grid-cols-1  gap-5 my-20 ">
        {cardData.map((data, idx) => (
          <DonationCard key={idx} data={data} ></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default DonationCards;
