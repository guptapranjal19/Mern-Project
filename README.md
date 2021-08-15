<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />

<p align="center">


  <h3 align="center">ProShop</h3>

</p>

  
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#live-version">Live Version</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is an eCommerce web application created with MERN Stack. It has user authentication. If you are an admin then you can add products, check for orders and payments, get a list of all the users, mark an order delivered, and much more. If you are a normal user, then you can add products to your cart, add or delete items from your cart, and place orders. It is also connected to PayPal for payments. 

### Built With

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Mongodb](https://www.mongodb.com/2)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org)
- [React-Redux](https://react-redux.js.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Create an .env file with the following keys. (Team Vihaan- Please contact anyone from below contacts for S3 keys if there is a difficulty in using S3 or if you want to test with S3 without making an AWS account) 

  ```
  NODE_ENV=development
  PORT=5000
  MONGODB_PASSWORD=<Mongodb password>
  MONGODB_URL=<Mongodb URL>
  JWT_SECRET=<JWT secret>
  PAYPAL_CLIENT_ID=<PayPal client ID>

  ```

### Installation

1. Install requirements
   ```
   $ npm install
   $ cd frontend/
   $ npm install
   ```
2. Run Application

   ```
   $ npm run dev
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->


