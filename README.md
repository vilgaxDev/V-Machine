# Vending Machine
## Project: A vending machine utilizing React.js, Node.js,

-----------------------
How to Run Project
------------------------------------------

    1. Download repo to local folder
    2. Open two instances of terminal
    3. In terminal 1 change into Vending Machine/server directory
    4. Run command:
        -npm run dev
    5. In terminal 2 change into Vending Machine/client directory
    6. Run command:
        -npm start
    7. Navigate to http://localhost:3000

How to utilize API
------------------------------------------
### In App Display
    1. Once launched navigate to Admin portal
    2. Navigate to Operations
        -List of API requests will be listed along with descriptions
    3. Perform function with POSTMAN at specific URI

### In README:
    1. Get all sodas [GET]:
        Send request to http://localhost:4000/v1/status/sodas
    
    2. Get individual soda by ID [GET]:
        Send soda ID to http://localhost:4000/v1/status/sodas/ID
    
    4. Add new soda [POST]:
        Send JSON to http://localhost:4000/v1/status/sodas/add
        FORMAT for JSON to POST as follows:
        ------------------------
        {
            "name": "NEW DRINK",
            "cost": 20,
            "quantity": 5000,
            "desc": "DELECTABLE."
        }
    
    4. Update soda by ID and send JSON [PUT]:
        Send soda ID to http://localhost:4000/v1/status/sodas/put/ID
        FORMAT for JSON to POST as follows:
        ------------------------
        {
            "name": "NEW NEW DRINK",
            "cost": 5000,
            "quantity": 1,
            "desc": "RARE."
        }
    
    5. Delete soda by ID [DELETE]:
        Send soda ID to http://localhost:4000/v1/status/sodas/delete/ID



### `npm start in client directory`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## Project Notes
-----------------------
    1. At launch
    -Soda varieties: 4
    -More varieties later in year
    2. Soda properties
    -id: int
    -Cost: $
    -Quantity: int
    -Prices to be adjusted based on sales
    -Prices to be adjusted dependent on need

## DEV TODO:
-----------------------
### 1. client
    -Vending machine UI
    -ACTION: PURCHASE SODA
        -Quantity stock change as needed in vending machine
        -Payment display functionality
### 2. server
    -Main Admin greeting page
    -Admin check status of vending machine
        -Displays current stock (JSON) of sodas
        -Admin restock vending machine
        -Operations Page
            -CRUD operations for soda via POSTMAN/API with future direct implementation
