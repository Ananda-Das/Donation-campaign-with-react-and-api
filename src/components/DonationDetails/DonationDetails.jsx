import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation, getStoredDonations } from "../../Utility/localStorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);

  const donationDetails = donations.find((donation) => donation.id == idInt);

  const handleDonation = () => {
    if (!getStoredDonations(idInt)) {
      toast.error("Already Donated");
    } else {
      saveDonation(idInt);
      toast.success("Thank you for donate");
    }
  };

  return (
    <div>
      <div>
        <div className="w-[1000px] mx-auto">
          <div>
            <img src={donationDetails.image} alt="" className="w-full mt-5" />
            <div>
              <button className="bg-[#FF444A] py-4 px-4 text-white rounded-md" onClick={handleDonation}>
                Donate ${donationDetails.price}
              </button>
            </div>
            <ToastContainer />
          </div>
          <h2 className="text-4xl font-semibold my-5">{donationDetails.title}</h2>
          <h2 className="text-justify">{donationDetails.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
