const getStoredDonations = () =>{
    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const getDonationPrice = () =>{
    const data = localStorage.getItem('price');
    if(data){
        return JSON.parse(data);
    }
    return [];
}

const saveDonation = (id,price) =>{
    const storedDonations = getStoredDonations();
    const donationPrice = getDonationPrice();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        donationPrice.push(price);
        
        localStorage.setItem('donation', JSON.stringify(storedDonations));
        
        localStorage.setItem('price', JSON.stringify(donationPrice));

        return true;
    }
    return false; 
}


export { getStoredDonations, saveDonation, getDonationPrice}

