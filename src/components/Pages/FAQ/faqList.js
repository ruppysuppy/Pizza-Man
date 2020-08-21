const list = [
    {
        question: "How can I get Pizza Man Franchise?",
        answer: "Tap FoodWorks Limited is the Master Franchisee of Pizza Man in India, Bangladesh, Sri Lanka and Nepal with sole and exclusive rights to own and operate Pizza Man restaurants in these territories. For any franchise-related queries, kindly email us directly at no-mail@email.com"
    },
    {
        question: "Can gift cards be used along with credit cards / other wallets for purchasing Pizza Man's products?",
        answer: "When placing an order online, the only other option is Cash on Delivery if full payment is not made through gift cards. In stores, gift cards can be used along with any other payment mode."
    },
    {
        question: "Is there an expiry time for the OTP generated?",
        answer: "No. OTP can be used only once, but there is no set expiry time for OTPs."
    },
    {
        question: "Expiry date on the card is mentioned as dd-mm-yyyy. Till when can the card be used for redemption?",
        answer: "The gift card can be used until midnight 11:59PM of dd-mm-yyyy."
    },
    {
        question: "What should I do if Gift Card is not delivered to the billing address?",
        answer: "Please contact us at no-mail@email.com or call us at 1800-000-0000."
    },
    {
        question: "Can I purchase more than 1 Gift Card at a time?",
        answer: "Yes, up to 10 Gift Cards during a transaction. To purchase larger quantities, contact Pizza Man corporate at no-mail@email.com"
    },
    {
        question: "What should be done if e-Gift Card is not delivered to the email address?",
        answer: "If an e-Gift Card is undelivered to the email address specified, ask customer to check the junk folder in mailbox. If still not received, ask for the order number and send to back end team to track the gift card generated against the online order number for resending."
    },
    {
        question: "What is validity of Electronic Gift Voucher?",
        answer: "Electronic Voucher is valid for 6 months from date of issuance."
    },
    {
        question: "What is validity of Paper Gift Voucher?",
        answer: "Paper Voucher validity is fixed and is mentioned on voucher back side."
    },
    {
        question: "In what denominations is Pizza Man's Paper Voucher sold?",
        answer: "In 3 fixed denominations INR 100, INR 200 and INR 500."
    },
    {
        question: "How will NEW PIZZA MAN'S PAPER VOUCHER be redeemed?",
        answer: "These are redeemed at store and online."
    },
    {
        question: "How will OLD PIZZA MAN'S PAPER VOUCHER will be redeemed?",
        answer: "These will be redeemed in CASHLESS (As per existing process)."
    },
    {
        question: "How will OLD PIZZA MAN'S EGV will be redeemed?",
        answer: "Existing 11-character alphanumeric Pizza Man?s E-GVs can be redeemed at stores and online. NO PIN will be required also these will be redeemed ONE TIME ONLY."
    },
    {
        question: "Is customer charged for SMS?",
        answer: "Yes"
    },
    {
        question: "How to find Pizza Man's Gift Card Balance through SMS?",
        answer: "SMS DOM BAL 10-digit card number to 00000."
    },
    {
        question: "Which are the different gift cards being sold by Pizza Man's?",
        answer: "Pizza Man's Gift Cards are available in various forms - Plastic card, Electronic-Gift Voucher and Mobile Gift Card."
    },
    {
        question: "What can be bought using a Pizza Man's gift card/voucher?",
        answer: "Pizza Man's Gift Card is a pre-loaded gift card, which can be used for purchasing any Pizza Man's product (Pizza, Sides or Beverages) in all participating restaurants or order online from desktop/laptop on www.pizza-man.com to know the steps."
    },
    {
        question: "How to activate Pizza Man's Physical Gift Card?",
        answer: "One needs to activate a physical gift card to use it. To activate the card, SMS DOM ACT 10-digit card number 6-digit card pin to 00000 from recipient's mobile number. This would link your gift card to your mobile number. Now for all future transactions at Pizza Man's outlet/web, OTP will be sent to the registered mobile number to authorize redemption transactions for this card."
    },
    {
        question: "How will customer know that card is activated?",
        answer: "Customer will receive gift card activation SMS on their registered mobile number."
    },
    {
        question: "What if OTP is not delivered to customer?",
        answer: "Request customer to wait or go to area where full network is available OR request to retry after 5 minutes."
    },
    {
        question: "How to find Pizza Man's Gift Card balance on Website?",
        answer: "Visit Pizza Man's Website Gift Card Page under Balance Enquiry enter 10-digit gift card number."
    },
    {
        question: "How is Pizza Man's Physical card different from Paper Gift Voucher, Electronic Gift Voucher and Mobile Gift Voucher?",
        answer: "Plastic Card is reloadable and redeemable multiple times however all other are for ONE TIME USE ONLY."
    },
    {
        question: "How will Pizza Man'S Paper Voucher will be redeemed?",
        answer: "These will be redeemed in store and on delivery."
    },
    {
        question: "How will Pizza Man'S Electronic Voucher be redeemed?",
        answer: "These are redeemed at store and online (only on web). For online logon to www.pizza-man.com from your desktop/laptop. Apply it on the payment page under Gift Card / Evoucher."
    },
    {
        question: " In what denominations is Pizza Man's Gift Card sold?",
        answer: "Pizza Man's Gift Card (Physical Card) can be purchased for variable denomination ranging between minimum value of Rs. 500 and maximum Rs. 49,999."
    },
    {
        question: " In what denominations is Pizza Man's Electronic Voucher sold?",
        answer: "The Pizza Man's Electronic Gift Voucher can be purchased for variable denomination ranging between minimum value of Rs. 100 and maximum Rs. 2,000."
    },
    {
        question: "How long does it take to receive Gift Card when ordered online?",
        answer: "Pizza Man's Gift Card usually takes 7-9 working days to reach. E-Gift Cards are normally delivered instantly. But sometimes due to system issues, the delivery can be delayed up-to 24 hours."
    },
    {
        question: "Can I purchase more than 1 Gift Card at a time?",
        answer: "Yes, up to 10 Gift Cards during a transaction on www.pizza-man.com. For bulk purchase: contact Pizza Mans corporate at no-mail@email.com"
    },
    {
        question: "How do I cancel my Pizza Man's Gift Card purchase?",
        answer: "The purchase of Pizza Man's Gift card cannot be cancelled after placing the order."
    },
    {
        question: "How do I cancel my Pizza Man's Gift Card at the store?",
        answer: "Please ensure that Pizza Man's Physical Card is activated before presenting it for redemption at the store. To redeem please hand over card to store staff, an OTP will be sent to registered mobile number to approve."
    },
    {
        question: "Should the entire value of the Pizza Man's Gift Card must be redeemed at once?",
        answer: "This depends on type of Gift Card. Physical Gift Card can be redeemed multiple times while electronic or mobile Gift Card are for one time use only. Any remaining balance after redemption in case of electronic Gift Card or mobile Gift Card will be forfeited."
    },
    {
        question: "What can be done if the billed value exceeds the value of Gift Card?",
        answer: "If bill value exceeds the value of the Gift Card, customer may settle the difference with either cash or a credit/debit card. However, in case of online order only COD is ONLY other payment option available."
    },
    {
        question: "Can I redeem more than one Gift Card for a single transaction?",
        answer: "A maximum of two gift cards can be used per order."
    },
    {
        question: "How can the customers do balance enquiry in case of online orders?",
        answer: "Customers can check balance and validity both during purchase of gift cards as well as during redemption. Only the 10-digit gift card number is required to perform a balance enquiry."
    },
    {
        question: "How can the gift cards be recharged?",
        answer: "Use the reload option in the gift cards section of pizza-man.com website to perform the Reload / Recharge. The reload option is applicable only for physical gift cards."
    },
    {
        question: "How is the validity of the gift card determined?",
        answer: "In case of physical gift cards, the expiry date is set to 365 days from the date of purchase of the gift card. The expiry is also extended by 365 days whenever a reload is performed and the entire balance is carried forward. In case of paper gift vouchers, the expiry is set to a specific calendar date and is mentioned on the paper voucher. In case of E-GVs, expiry date is set to 180 days from the date of activation / purchase."
    },
    {
        question: "What is the Expiry date for the Physical gift card?",
        answer: "The physical gift card expiry is 1 year from the date/time of activation. The expiry would be extended for 1 year further on every reload before the expiry of the physical gift card from the date of reload."
    },
    {
        question: "Where can the gift cards be purchased?",
        answer: "Currently, in Phase 1, Gift cards can only be purchased online or through redistributors. Gift cards can also be purchased as part of corporate / bulk deals directly from Domino?s. In the future, gift cards can also be bought at the stores."
    },
    {
        question: "Is OTP required in case of online purchases also?",
        answer: "Yes. The process is similar to redemption at stores. Either OTP or Card PIN needs to be entered based on the gift card type."
    },
    {
        question: "How to order?",
        answer: "You Can order online through www.pizza-man.com"
    },
    {
        question: "How to redeem E.Gift Voucher?",
        answer: "Go to Pizza Man's website  www.pizza-man.com, select your pizzas and without applying any offer code under redeem code page, move to 'Proceed to payment' page option, on left side you will find multiple payment options. Under that option one option will be 'E.Gift Voucher' Click on that link, enter the code and your bill value will be deducted by the voucher value."
    },
    {
        question: "Code is not redeeming",
        answer: "Do not apply any offer code. Apply code only on the payment page and Select right combination of products any order above Rs. 300 shall be eligible for delivery rest orders will be Pick up orders or else adding of one Pizza is mandatory for delivery."
    },
    {
        question: "Where can I write my complaint?",
        answer: "In case of queries customer can write at no-mail.email.com"
    },
    {
        question: "How to buy E.Gift Voucher?",
        answer: "You can buy gift vouchers at www.pizza-man.com/gift-voucher"
    },
    {
        question: "My password is not being accepted",
        answer: "Please try the 'forget password' link to generate a new password."
    },
    {
        question: "I am not able to login",
        answer: "Please check if you are using the correct login credentials? Please try the 'forget password' link to generate a new password."
    },
    {
        question: "How to register on your website / how will I get login credentials",
        answer: "After you place your 1st order an auto generated password will be sent on your email address to login at your next visit to our site."
    },
    {
        question: "How to register on your website / how will I get login credentials",
        answer: "After you place your 1st order an auto generated password will be sent on your email address to login at your next visit to our site."
    },
    {
        question: "Horrible experience with the restaurant that delivered to me last time. Why can't I select a Restaurant of my choice?",
        answer: "We are sorry to hear about your previous experience. As regards the delivery area, every Restaurant has its own defined delivery area to serve you quickly. We are sure you will not face any issues with the same restaurant this time around."
    },
    {
        question: "What is the minimum amount applicable for delivery?",
        answer: "There is No Minimum amount required for delivery. You need to ensure that there is a Pizza in your order. In case if you require Side Order Delivery the amount should be more than Rs 300. Also please note that we don't charge anything extra for delivery"
    },
    {
        question: "I was charged however, didn't receive order details. What is the status?",
        answer: "We apologize for the inconvenience caused to you. As your order was Not Successful you will receive a refund back in your account within 7-10 working days. Also we would request you to please place another order by calling our Hotline number 1800-000-0000."
    },
    {
        question: "I'm not able to place Order Online.",
        answer: "Please ensure that you are on 'www.pizza-man.com/menu'"
    },
    {
        question: "How can I avail Corporate Discount?",
        answer: "Corporate Discount is Not Applicable on OLO however, in order to avail Corporate Discount please call 1800-000-0000 or please visit your Nearest Restaurant."
    },
    {
        question: "My City/My restaurant is not showing Online.",
        answer: "Due to some technical reason the Restaurant/City is not available to place orders. You may choose to call us at 1800-000-0000 for placing your order."
    },
    {
        question: "Do you have Coupon Related Issues?",
        answer: "1. Please ensure you are mentioning the correct coupon code 2.Please check the validity of the coupon 3. Please check the Terms & Conditions of the Coupon: i. Rs.100 off on a min bill of 350/400 ii. Garlic bread and Dip free on min bill of Rs.350/400 iii. Choco lava free on min bill of Rs.350/400 iv. 20% off on a min bill of Rs.350/400 v. 25% off on a min bill of Rs.350/400 vi. 30% off on a min bill of Rs.350/400 vii. Buy one Get one free (Only on Wednesdays) 4. Still Facing Issues: - Call 1800-000-0000"
    },
    {
        question: "Can I place an Advance Order?",
        answer: "You can certainly go ahead and chose your preferred time for delivery on our Online Ordering."
    },
    {
        question: "Why is Service Tax being charges on Take Away/Delivery?",
        answer: "As per the latest notification released by Deputy Commissioner of Central Exercise & Service Tax Division, Kolkata, the letter dated 13.08.2015 (Letter ref. 4693) has been withdrawn ab-inito (i.e. from beginning) through letter issued on 09.09.2015 (Letter Ref No. 6118) hence service tax continues to be levied on Home Delivery and Carry Out"
    },
    {
        question: "What is 30 minutes Service Guarantee?",
        answer: "Please check out our Terms & Conditions at www.pizza-man.com/terms-and-conditions"
    },
    {
        question: "Please specify Product description!",
        answer: "Please check out our Menu at www.pizza-man.com/menu"
    },
    {
        question: "What are your product prices?",
        answer: "Please check out our Menu at www.pizza-man.com/menu"
    },
    {
        question: "What are the Delivery Times at Pizza Man's Pizza?",
        answer: "We at Pizza Man deliver from 11 AM to 11 PM"
    },
    {
        question: "What is the Operative Window for Pizza Man's Pizza?",
        answer: "We at Pizza Man operate  from 11 AM to 11 PM"
    }
]

export default list