//Store pricing data in objects
const dPrices=
{
    "Ancient Egypt (1350 BCE)":420,
    "Golden Age of Privacy (1960s)":380,
    "Wild West (1870s)":310,
    "Roaring Twenties (1925)":350,
    "Cyberpunk Metripolis (2142)":560,
    "Martian Colony (2300)":780
};
const mPrices=
{
     "Classic DeLorean":140,
     "Steampunk Portal":190,
     "Quantum Suit":260
};
const insurancePricePer=75;

//function to calculate total cost of the trip
function calcQuote(destination,travellers,days,machine,insuranceCount)
{
    let dCost=dPrices[destination]*travellers*days;
    let mCost=mPrices[machine];
    let iCost=insuranceCount*insurancePricePer;
    let total=dCost+mCost+iCost;
    return{dCost,mCost,iCost,total};
}
//Event listener for button click
document.getElementById("btn").addEventListener("click",function(){
    //Get values from form inputs
    let destination=document.getElementById("destination").value;
    let travellers=parseInt(document.getElementById("travellers").value);
    let days=parseInt(document.getElementById("days").value);
    let machine=document.querySelector('input[name="machine"]:checked').value;
    let name=document.getElementById("name").value;

    let insuranceOptions=document.querySelectorAll('input[name="insurance"]:checked');
    let insuranceCount=insuranceOptions.length;

    //calculate total cost
    let quote=calcQuote(destination,travellers,days,machine,insuranceCount);

    //display quote
    let output=`<h2 class="heading">Your Time Travel Quote</h2>
                <p><span class="label">Name: </span>${name}</p>
                <p><span class="label">Destination: </span>${destination}</p>
                <p><span class="label">Machine Model: </span>${machine}</p>
                <p><span class="label">Number of travellers: </span>${travellers}</p>
                <p><span class="label">Number of days: </span>${days}</p>
                <h3 class="heading">Toal Cost: ${quote.total} CC</h3>`;


    document.getElementById("quoteOutput").innerHTML=output;
});


