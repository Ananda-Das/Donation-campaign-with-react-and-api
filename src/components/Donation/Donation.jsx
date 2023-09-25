// import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localstorage";

const Donation = () => {

    const donations = useLoaderData();

    const [giveDonation, setGiveDonation] = useState([]);
    const [displayJobs, setDisplayDonation] = useState([]);

    useEffect(() => {
        const storedDonation = getStoredDonations();
        if (donations.length > 0) {

            



            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const donated = [];
            for (const id of storedDonation) {
                const donate = donations.find(donate => donate.id === id);
                if (donate) {
                    donated.push(donate)
                }
            }

            console.log(donations, storedDonation);

            setGiveDonation(donated);
            setDisplayDonation(donated);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [donations])
    
    return (
        <div>
            <p>This is donation: {giveDonation.length}</p>
        </div>
    );
};

export default Donation;