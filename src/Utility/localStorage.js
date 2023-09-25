const getStoredDonations = () =>{
    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonation = id =>{
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(jobId => jobId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation', JSON.stringify(storedDonations))
    }
}

export { getStoredDonations, saveDonation}

// const getStoredJobApplication = () =>{
//     const storedJobApplication = localStorage.getItem('job-applications');
//     if(storedJobApplication){
//         return JSON.parse(storedJobApplication);
//     }
//     return [];
// }


// const saveJobApplication = id =>{
//     const storedJobApplications = getStoredJobApplication();
//     const exists = storedJobApplications.find(jobId => jobId === id);
//     if(!exists){
//         storedJobApplications.push(id);
//         localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
//     }
// }

// export { getStoredJobApplication, saveJobApplication}