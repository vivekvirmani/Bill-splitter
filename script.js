const billInput = document.querySelector(".bill-input input");
const generateBillBtn = document.querySelector(".generate-bill-button");
const noOfPeople = document.querySelector(".number-of-people");
const customTip = document.querySelector(".custom-tip");
const tipAmountPara = document.querySelector(".tip-amount span");
const totalPara = document.querySelector(".total span");
const eachPersonBillPara = document.querySelector(".each-person-bill span")
const tipBtnContainer = document.querySelector(".tip-container");
const resetBtn = document.querySelector(".reset-btn");

let tipAmount;

generateBillBtn.disabled = false;
resetBtn.disabled = true;

generateBillBtn.addEventListener("click",()=>{
    let totalBill = Number(billInput.value)
    let customTipVal = Number(customTip.value)
    if(!customTipVal){
        let tipPersentage =  totalBill * Number(tipAmount/100)
        tipAmountPara.innerText = `₹ ${tipPersentage}`
        totalBill = totalBill + tipPersentage
    }else{
        totalBill = totalBill + customTipVal
        tipAmountPara.innerText = `₹ ${customTipVal}`
    }
    
    
    if(!parseInt(totalBill / Number(noOfPeople.value))){
       eachPersonBillPara.innerText = 0
       totalPara.innerText = 0
       tipAmountPara.innerText = 0
    }else{
        eachPersonBillPara.innerText =   `₹ ${parseInt(totalBill / Number(noOfPeople.value))}`
        totalPara.innerText = `₹ ${totalBill}`
    }
    resetBtn.disabled = false;
    generateBillBtn.disabled = true;
    // generateBillBtn.style.cursorNotAllowed = true;
})

customTip.addEventListener("click",(e)=>{
    [...tipBtnContainer.children].forEach((tip)=> tip.classList.remove("select"))
})

tipBtnContainer.addEventListener("click",(e)=>{
    [...tipBtnContainer.children].forEach((tip)=> tip.classList.remove("select"))
    e.target.classList.add("select")
    customTip.value = ""
    tipAmount = parseInt(e.target.innerText)
})

resetBtn.addEventListener("click",()=>{
   billInput.value = ""
   noOfPeople.value = ""
   customTip.value = ""

   totalPara.innerText = `₹ 0`
   eachPersonBillPara.innerText = `₹ 0`
   tipAmountPara.innerText = `₹ 0`;

   [...tipBtnContainer.children].forEach((tip)=> tip.classList.remove("select"))
   resetBtn.disabled = true;
   generateBillBtn.disabled = false;
   
})