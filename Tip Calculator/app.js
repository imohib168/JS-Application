function tipCalc() {
    var billAmt = document.getElementById("billAmount").value;
    var service = document.getElementById("service").value;
    var NumOfPeople = document.getElementById("sharingBill").value;

    if (billAmt === "" || service == 0) {
        alert("Kindly Enter the given fields to calculate the Tip...");
    };

    var total = (billAmt * service) / NumOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML =  "Rs. " + total;

}

document.getElementById("calculate").onclick = function() {
    tipCalc()
}