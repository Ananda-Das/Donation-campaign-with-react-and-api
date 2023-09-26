import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../../Utility/localStorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);
  

  const donationDetails = donations.find((donation) => donation.id == idInt);

  const { image, title, description, price, btnBg, } =  donationDetails;

  const handleDonation = () => {
    const save = saveDonation(id, price);
    if (save) {
      toast.success("You Donate");
    } else {
      toast.error('dsklfaj');
    }
  };

  return (
    <div>
      <div>
        <div className="w-[1000px] mx-auto">
          <div>
            <img src={image} alt="" className="w-full mt-5" />
            <div className="h-[120px] absolute w-[1000px] mt-[-120px] bg-[#0B0B0B80] bg-opacity-50 bg-blend-overlay">
              <button className="py-4 px-4 text-white my-7 mx-7 rounded-md" style={{backgroundColor:btnBg}} onClick={handleDonation}>
                Donate ${price}
              </button>
            </div>
            <ToastContainer />
          </div>
          <h2 className="text-4xl font-semibold my-5">{title}</h2>
          <h2 className="text-justify">{description}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
