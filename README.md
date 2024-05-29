# soluct-market

Project made with the purpose of avaliation on a job interview, focused on the frontend.
<hr>

<p align="center">
    <a href="#project-setup">Project Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#project-structure">Project Structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#project-dependencies">Project Dependencies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#how-to-test">Project Tests</a>
</p>


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Requirements

```sh
Node Version v20.13.1 & npm Version 10.5.2
```


## Project Setup

1. Clone the repository into your machine:
```sh
git clone https://github.com/{your-user}/soluct-market.git
```
2. Access the directory
```sh
cd soluct-market
```
3. Install the dependencys
```sh
npm install
```

## Commands to Run
### Compile and Hot-Reload for Development

```sh
npm run dev
```
the project will be on http://localhost:5173

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Project Structure

- src/assets :  Containing the static files like, images and fonts
- src/components: Containing the components of the project that are reusable
- src/router: Containing the routes of the project
- src/services: Containing the API calls 
- src/stores: Containing the store of the project with Pinia
- src/utils: Containing the types and interfaces of the project
- src/views: Containing the 'pages' of the project, with each View linked with a route


## Project Dependencies

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.esm.dev/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://axios-http.com/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide-icons.web.app/)
- [TypeScript](https://www.typescriptlang.org/)
- [Headless UI](https://headlessui.dev/)


## How to Test

### In the toggles, you can see the instructions to test each part of the project
<details>
    <summary>Test the Login Page</summary>

    -- As a user, I want to log in to the application, so I can access the home page --
    
    The user can log in with the following credentials:

    username: "mor_2314",
    password: "83r5^_”
    
    After the login, the user will be redirected to the home page.

    Tests:

    Informing the wrong credentials, the user will see an error message.

    When you run the project, you will see the login page, testing forcing the '/' route will be redirected to the login page, and the user will be able to access the home page ONLY after the successful login.

    Note: After the successful login, a token will be stored in the local storage, and the user will be redirected to the home page, causing the forcing of '/login' route to redirect to the home page.
</details>

<details>
    <summary>Test the Home Page and Logout</summary>

    -- As a user, I want to see the products and Logout --

    After the successful login, the user will be redirected to the home page, where the user can see the header and the products. The user can log out by clicking on the logout button, causing the token to be removed from the local storage and the user to be redirected to the login page.

    Tests:

    If the user closes the tab while logged in, and open again, he will still be able to access the home page, as the token is stored in the local storage.

    Note: After the logout, the user will be redirected to the login page, causing the forcing of '/home' route to redirect to the login page.
</details>

<details>
    <summary>Test the Order, View and the Filter</summary>

    -- As a user, I want to order the items by Asc or Desc --
    
    The user can click on the order button to order the items by Asc or Desc.

    Tests: 

    Clicking in the order button, shall order the items by Asc or Desc, beeing the default order by Asc.

    -- As a user, I want to view X quantities of the products --

    The user can click on a select to choose the quantity of the products to be shown. Beeing the values: 5, 10, 15, 20 and the default value All.

    Tests: 

    Clicking in the select, shall show the quantity of the products chosen by the user. Have an All option to show all the products again.

    -- As a user, I want to filter the products by Category --

    The user can click on the filter button to filter the products by category.

    Tests:

    Clicking in the filter button, shall open a dropdown with the categories, choosing one will cause the products to be filtered by the chosen category.

    Available categories: "electronics", "jewelery", "men's clothing", "women's clothing", "All"

    Note: The user can Order, View and Filter at same time.
</details>
<details>
    <summary>Test the Product Details</summary>

    -- As a user, I want to see the products details --

    The user can click on the product to see the details of the product.

    Tests:

    Clicking in the product, shall open a modal with the details of the product. (Name, Price, Description, Category, Image)

    Note: The user can close the modal by clicking outside the modal or in the close button.
    
</details>
<details>
    <summary>Test the Responsiveness</summary>

    -- As a user, I want to access the website in mobile and have a good experience --

    The user can access the website via mobile and have a good experience.

    Tests:

    Opening the inspect tool and changing the device to a mobile device, the user will see the website in a mobile version, with the header and the products in a good experience.
    
</details>

