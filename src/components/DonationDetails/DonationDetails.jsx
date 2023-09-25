import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donationDetails = donations.find((donation) => donation.id == id);
  return (
    <div>
      <div>
        <div className="w-[1000px] mx-auto">
          <div>
            <img src={donationDetails.image} alt="" className="w-full mt-5" />
            <button className="bg-[#FF444A] py-4 px-4 text-white rounded-md">Donate ${donationDetails.price}</button>
          </div>
          <h2 className="text-4xl font-semibold my-5">{donationDetails.title}</h2>
          <h2 className="text-justify">{donationDetails.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
