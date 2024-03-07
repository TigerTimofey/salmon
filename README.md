# Sushi restaurant website

## `About project`

This website is intended for a restaurant that has a main menu. On the website, customers can place orders online or make table reservations. All the data that is collected after an order is placed can be further utilized.

## `Images`

<img src="https://github.com/TigerTimofey/soul-mall/assets/119110538/9bbcc040-9368-475f-96f4-5361c369a2ff" alt="1"  height="240">
<img src="https://github.com/TigerTimofey/soul-mall/assets/119110538/6346874c-359a-4e5d-b06d-c01ecd55c084" alt="2"  height="240">
<img src="https://github.com/TigerTimofey/soul-mall/assets/119110538/74063b86-4c16-47b6-b12b-0dd13814305b" alt="3"  height="240">
<img src="https://github.com/TigerTimofey/soul-mall/assets/119110538/11cfcbd0-687d-4b94-be98-e4a1b4ce2926" alt="4"  height="240">

## `Functionality`

If a user wishes to place a takeout order, the cart will initially be empty and they will be prompted to navigate to the menu. After adding items, they will instantly appear in the cart, where the final cost will be calculated based on the quantity. In the menu, there is also an option to remove items from the cart. After entering their information, the customer has the opportunity to review a pop-up modal displaying their final bill.

Additionally, the website offers the option to make table reservations. In the table reservation section of the menu, users will be prompted to enter their name (letters only), the number of guests (numbers only), and any additional information. There's also an integrated calendar for selecting the reservation date. After entering their information, the customer can review a pop-up modal displaying the final details, including the reservation information and any associated costs.

For larger screens, navigation between pages is facilitated by clicking on the menu. For tablets and phones, scrolling is available to navigate through the content on the screen.

## `Versions and used packages`

@react-google-maps/api version "^2.18.1"\
@reduxjs/toolkit version "1.9.5"\
react-redux "8.1.2"\
react-scroll "1.8.9"\
web-vitals ^2.1.4"\
bootstrap version "5.3.1"\
lottie-web "2.29.4"\
node-sass version "7.0.3"\
react version "18.2.0"\
react-bootstrap version "2.7.2"\
react-dom version "18.2.0"\
react-scripts version "5.0.1"

## `How to add your menu`

You can store all your menu items, prices, and currency information in a file named "ConstantMenu.jsx".

You can add menu photos to each individual category in the following files: "MenuPageMaki.jsx", "MenuPageNigiri.jsx", and "MenuPageSoup.jsx".
