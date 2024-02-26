const Base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select" );
const tocurr=document.querySelector(".to select" );
const msg=document.querySelector(".msg");

    
//  updated the countrylist
for (let select of dropdowns) {
    for (currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
// changing the flages
const updateFlag = (element) =>{
        let currcode=element.value;
        console.log(currcode);
        let countryCode=countryList[currcode];
        let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png` 
        let img=element.parentElement.querySelector("img");
        img.src=newSrc; 
}

//  gate exchange rate

    btn.addEventListener("click",async (evt)=>{
    
    evt.preventDefault();
    let amount=document.querySelector("form input");    //.amount input
    let amtVal=amount.value;
    if(amtVal===""||amtVal<1) {
        amtVal=1;   
        amount.value="1";
    }   
    // console.log(fromcurr.value,tocurr.value);
    const URL=`${Base_url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
   let response = await fetch(URL);
   let data=await response.json();
   let rate=data[tocurr.value.toLowerCase()]; 
   console.log(rate);

   let finalAmount=amount.value*rate;
    msg.innerText=`${amtVal}${fromcurr.value}=${finalAmount}${tocurr.value}`;

});