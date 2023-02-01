# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Or: clone the repo

### `npm install`


## About project

1.Choose of the API
Reason: 
1.The Unsplash API is a modern JSON API that surfaces all of the info you’ll need to build any experience for your users. It’s so simple to use that we even run unsplash.com on it!
2.Fast, flexible and without limits.
3.We trust our API so much, we even run Unsplash.com on it.
4.Whether you’re building an experimental or an advanced app, we make setup easy.
5.We’ve built the Unsplash API to fit right into your workflow. Here are some helpful tools.
1) Available on Android and iOS. 
2)Dynamically resizable images
3)We maintain official libraries in JavaScript, PHP, and Ruby. Our community have also built popular libraries in Go, Python, Swift, and more.
4)Unsplash is already integrated natively inside tools like Figma, Framer, Sketch and Codepen, so wherever you build, we’re there.


2.Description: How to use it
1.Creating a developer account
To access the Unsplash API, first join.

https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

Libraries & SDKs
To make it as easy as possible to integrate the Unsplash API, official libraries and SDKs exist in:
1)PHP (unsplash/unsplash-php)
2)Ruby (unsplash/unsplash_rb)
3)Javascript (unsplash/unsplash-js)
4)iOS (unsplash/unsplash-photopicker-ios)
5)Android (unsplash/unsplash-photopicker-android)

HTTP Verbs
The Unsplash API uses HTTP verbs appropriate to each action.
Verb	Description
GET	Retrieving resources.
POST	Creating resources.
PUT	Updating resources.
DELETE	Deleting resources.

Common Status Codes	Description
200 - OK	Everything worked as expected
400 - Bad Request	The request was unacceptable, often due to missing a required parameter
401 - Unauthorized	Invalid Access Token
403 - Forbidden	Missing permissions to perform request
404 - Not Found	The requested resource doesn’t exist
500, 503	Something went wrong on our end



2.Usage:
1)  Search photos:
https://api.unsplash.com/search/photos?page=1&query=office

Parameters
param	Description
query	Search terms.
page	Page number to retrieve. (Optional; default: 1)
per_page	Number of items per page. (Optional; default: 10)
order_by	How to sort the photos. (Optional; default: relevant). Valid values are latest and relevant.
collections	Collection ID(‘s) to narrow search. Optional. If multiple, comma-separated.
content_filter	Limit results by content safety. (Optional; default: low). Valid values are low and high.
color	Filter results by color. Optional. Valid values are: black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, and blue.
orientation	Filter by photo orientation. Optional. (Valid values: landscape, portrait, squarish)


2)  List photos
https://api.unsplash.com/photos?page=1

Parameters
param	Description
page	Page number to retrieve. (Optional; default: 1)
per_page	Number of items per page. (Optional; default: 10)
order_by	How to sort the photos. Optional. (Valid values: latest, oldest, popular; default: latest)

3) Get a random photo

https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY
Parameters
All parameters are optional, and can be combined to narrow the pool of photos from which a random one will be chosen.
param	Description
collections	Public collection ID(‘s) to filter selection. If multiple, comma-separated
topics	Public topic ID(‘s) to filter selection. If multiple, comma-separated
username	Limit selection to a single user.
query	Limit selection to photos matching a search term.
orientation	Filter by photo orientation. (Valid values: landscape, portrait, squarish)
content_filter	Limit results by content safety. Default: low. Valid values are low and high.
count	The number of photos to return. (Default: 1; max: 30)


3.Key point of practice
1)How to use an API: docs / guide, choose a right API resources
2)Fetch or axios to connect API and get the data (in Json format)
3)React hooks like useState, useEffect, to understand components lifecircle and loading requests;
4)Passing data to children components with props
5)Using UI library like Sementic UI;
6)Best practice of coding: comments, structure, etc.

4.Discussion:
1)The practice could be more advanced: CRUD with data for example to make blog and posts;
2)Set the images as background of page components parts;
3)Comments or likes...



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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



