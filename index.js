document.getElementById("donation-button")
.addEventListener("click",function(event){
    event.preventDefault();

    const addDonation = getInputFieldValueById('input-donation');
    console.log('Donation amount : ',addDonation); 
    
    const donation = getTextFieldValueById('donation-amount');
    
    const newDonation = addDonation + donation ;

    document.getElementById('donation-amount').innerText = newDonation;
    console.log(donation,addDonation);

    if(addDonation > 0 || isNaN(newDonation)){
        alert("Invalid Donation Amount");
    } 

    else if (newBalance < donation){
        alert("insufficient balance");
        return ;
    }

    const remainingBalance = getTextFieldValueById('account-balance');
    const newBalance = remainingBalance - addDonation;

    document.getElementById('account-balance').innerText = newBalance;
    console.log(remainingBalance,addDonation);
})

document.getElementById("donation-button1")
.addEventListener("click",function(event){
    event.preventDefault();

    const addDonation1 = getInputFieldValueById('input-donation1');
    console.log('Donation amount1 : ',addDonation1);

    const donation1 = getTextFieldValueById('donation-amount1');

    const newDonation1 = addDonation1 + donation1 ;

    document.getElementById('donation-amount1').innerText = newDonation1;
    console.log(donation1,addDonation1);

    const remainingBalance = getTextFieldValueById('account-balance');
    const newBalance = remainingBalance - addDonation1;

    document.getElementById('account-balance').innerText = newBalance;
    console.log(remainingBalance,addDonation1);
})

document.getElementById("donation-button2")
.addEventListener("click",function(event){
    event.preventDefault();

    const addDonation2 = getInputFieldValueById('input-donation2');
    console.log('Donation amount2 : ',addDonation2);

    const donation2 = getTextFieldValueById('donation-amount2');

    const newDonation2 = addDonation2 + donation2 ;

    document.getElementById('donation-amount2').innerText = newDonation2;
    console.log(donation2,addDonation2);

    const remainingBalance = getTextFieldValueById('account-balance');
    const newBalance = remainingBalance - addDonation2;

    document.getElementById('account-balance').innerText = newBalance;
    console.log(remainingBalance,addDonation2);
})