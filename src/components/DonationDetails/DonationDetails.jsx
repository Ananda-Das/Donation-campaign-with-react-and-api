import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useGetLocalDonation from "../hooks/useGetLocalDonation";
// import { useState } from "react";
import { saveDonation } from "../../Utility/localStorage";
// import { saveJobApplication } from "../../Utility/localStorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();

  const donationDetails = donations.find((donation) => donation.id == id);

    // const handleDonation = () =>{
    //     toast.success('You donate Successfully');

    //     const { storedDonations } = useGetLocalDonation("donated_campaigns");

    //     const [allStoredDonations, setAllStoredDonations] = useState([]);
        
    // }

    // const { storedDonations } = useGetLocalDonation("donated_campaigns");

    // const [allStoredDonations, setAllStoredDonations] = useState([]);

    const handleDonation = () => {

        if(!saveDonation(id)){
            toast.error('Already Donated');
        }else{
            toast.success('Thank you for donate');
        }

        // saveJobApplication(id);

    }

  
  return (
    <div>
      <div>
        <div className="w-[1000px] mx-auto">
          <div>
            <img src={donationDetails.image} alt="" className="w-full mt-5" />
            {/* <div className="bg-[#0B0B0B80] bg-opacity-50 bg-blend-overlay p-4 lg:p-9 absolute bottom-0 left-0 right-0"> */}
                        {/* <button  className="text-white text-[20px] py-2 px-5 lg:py-4 lg:px-8 rounded-md font-semibold">Donate ${donationDetails.price}</button>
                    </div> */}
            <button className="bg-[#FF444A] py-4 px-4 text-white rounded-md" onClick={handleDonation}>Donate ${donationDetails.price}
            </button>
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
