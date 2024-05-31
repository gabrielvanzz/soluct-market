<h1 align="center">soluct-market</h1>

<p align="center">Project made with the purpose of avaliation on a job interview, focused on the frontend.</p>
<hr>

<p align="center">
    <a href="#project-setup">Project Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#project-structure">Project Structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#project-dependencies">Project Dependencies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#how-to-test">Project Tests</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="https://www.notion.so/Soluct-Market-644a9bdceff14be5a2e27df2dd62669a?pvs=4">Project Board</a>
</p>
<hr>


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
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vue Router](https://router.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) -> Used for the styles of the project
- [Lucide Icons](https://lucide-icons.web.app/) -> Used for the icons on project
- [Axios](https://axios-http.com/) -> Used for HTTPS Requests
- [Headless UI](https://headlessui.dev/) -> Used for DropDown Filter, Select and Modal


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
    <summary>Test the Product Edit</summary>

    -- As a user, I want to edit the selected product --

    The user can click on the pencil icon for open an Edit Modal inside the product modal.

    Tests:

    Clicking in the edit modal shall switch the fields to input fields, and the user can edit the fields. After the user clicks on the save button, the product will be updated.

    Clicking outside the modal or in the close button, shall close the modal without saving the changes.

    Note: After edit, the user can verify the changes by clicking in the product again, if the user reload the page, the changes will be lost.
    
</details>

<details>
    <summary>Test the Product Delete</summary>

    -- As a user, I want to deleted the selected product --

    The user can click on the delete button, inside the product modal.

    Tests:

    Clicking in the delete button shall delete the product. After the click, the modal will close

    Note: After edit, the user can verify the delete by viewing the product list, if the user reload the page, the changes will be lost, he can filter the products by category to see the changes.
    
</details>

<details>
    <summary>Test the Product Insert</summary>

    -- As a user, I want to insert an product --

    The user can click on + icon in the header, to navigate to a '/new-product' route, where the user can insert a new product.

    Tests:

    Filling the fields and clicking in the save button, shall insert the product in the list. After the click, shall be showed a toast with the message "Product inserted successfully", we can see the new product in the payload/preview.

    Note: After insert, the user can't verify the changes, because when we redirect or click to go back, the changes will be lost
</details>

<details>
    <summary>Test the Product List</summary>

    -- As a user, I want to go back into Product List --

    The user can click on the 'soluct market' and navigate to the home page.

    Tests:
    Clicking into the 'soluct market' shall navigate to the home page, where the user can see the products.
</details>

<details>
    <summary>Test the Toast</summary>

    -- As a user, I want to see feedbacks for my actions --

    Everytime the user makes an action that causes a change, a toast will be shown with the message of the action.

    Tests:
    Making a change in the products, shall show a toast with the message of the action.
    Making a login with the wrong credentials, shall show a toast with the message of the error.
    Making a login with the right credentials, shall show a toast with the message of the success.
    Making a login without the credentials, shall show a toast with the message of the warning.
</details>

<details>
    <summary>Test the Responsiveness</summary>

    -- As a user, I want to access the website in mobile and have a good experience --

    The user can access the website via mobile and have a good experience.

    Tests:

    Opening the inspect tool and changing the device to a mobile device, the user will see the website in a mobile version, with the header and the products in a good experience.
    
</details>

