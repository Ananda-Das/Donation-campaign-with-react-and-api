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

