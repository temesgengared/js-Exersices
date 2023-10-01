let Itemprice = 50;
let Itemquantity = 10;
let discountPercentage = 5;
let taxPercentage = 0.01;
//let threshold = 1000;
let discount = 0;
let subTotalCost = Itemprice * Itemquantity;
// if (subTotalCost > threshold)
// {
//     discountAmount= subTotalCost * (discountPercentage/100);
// }
discount = subTotalCost > 10 ? subTotalCost * (discountPercentage / 100) : 0;
// let discountAmount = (subTotalCost*discountPercentage)/100;
let totalPriceAfterDiscount = subTotalCost - discount;
let taxAmount = (totalPriceAfterDiscount * taxPercentage);
let finalCost = totalPriceAfterDiscount + taxAmount;

console.log(`original price: ${Itemprice} 
Item Quantity: ${Itemquantity}
Sub total cost: ${subTotalCost} 
Discount amount: ${discount.toFixed(2)}
Total price after discount: ${totalPriceAfterDiscount}
Tax amount: ${taxAmount.toFixed(2)} 
Total Cost: ${finalCost}`);