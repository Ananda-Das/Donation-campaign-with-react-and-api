/* eslint-disable react/prop-types */
// import React from 'react';

// eslint-disable-next-line react/prop-types
const ShowDonationCard = ({ donation }) => {
  const { image, bgColor, title, categories, price, btnBg, btnText, detailsBtnText, textColor } = donation;
  return (
    <div className="flex" style={{ backgroundColor: bgColor }}>
        <img className="rounded-lg" src={image} alt="" />
      <div className="py-4 pl-4" >
        <p className="font-medium text-[14px] rounded-lg py-1 px-[10px] inline-block" style={{ backgroundColor: btnBg, color: btnText }}>{categories}</p>
        <h1 className="font-semibold text-[#0B0B0B] text-[24px] mt-3">{title}</h1>
        <p className='font-semibold text-base mt-2 mb-4' style={{ color: textColor }}>${price}.00</p>
        <button className='text-white rounded-md py-2 px-6 text-[18px] font-semibold' style={{ backgroundColor: textColor, color: detailsBtnText }}>View Details</button>
      </div>
    </div>
  );
};

export default ShowDonationCard;
