<h1 align="left">Native Shop</h1>

###

<p align="left">Native Shop is a project that aimed to study how React Native and Firebase Firestore work.<br><br>A virtual store was created using data from a Firestore collection and it is divided in two screens (Products and Cart).<br><br>On the Products screen, it is possible to add products to the cart, placing quantity in them, and also remove them.<br><br>On the Cart screen, the products that the user has added to the cart are shown, making it possible to change the desired quantities as well and that, if the user returns to the Products screen, these changes will also be there.<br><br>When performing all the previously mentioned actions, the products are saved in the device's storage, that is, the data persists until removed by the user.<br><br>Finally, it is possible to finalize the purchase, triggering an alert and clearing the cart.</p>

###

<h2 align="left">Technologies used</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" width="62" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" width="62" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="50" width="62" alt="firebase logo"  />
</div>

###

<h2 align="left">How to use the application</h2>

###

Clone the application using the `git clone` command. After that, enter the project folder using the `cd native-shop` command and use the `npm install` command to install all the dependencies.

###

<h2 align="left">Running the application with Docker</h2>

###

inside the project, use the `npm start` command and open the application using the `Expo Go` app with the provided address.

<h2 align="left">Seeding the database</h2>

###

In the `src/firebase/productsMock.ts` file, there is an object with data in the format that is stored in the database. In the `src/firebase/seeder.ts` file, a function performs seeding the database with this previously available object. If you want to have a developer-like experience when using the application, run this file.

Don't forget to create an `.env` file and put your Firebase project information.

PS: there is an `.env.example` file already created in the root folder of the project. Just put the information there and change the file name to `.env`
