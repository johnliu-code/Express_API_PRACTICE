# MERN_STACK_PhotoStories_API_Project

cd backend, npm install;
cd frondend npm install;

if needed, run npm audit fix --force, (for some issues...)

.env to add MONGODB_URI = mongodb://127.0.0.1:27017/storiesdb


MERN STACK PROJECT GUIDE

1. Techniques:
   1) Backend: Node.js, Express, MongoDB, Nodemon, cors, jwt
   2) Frontend: React, semanticUI, etc.
   3) API: https://unsplash.com/documentation
           https://github.com/thundercomb/poetrydb/blob/master/README.md
2. Start up
   1) MVC for structure
   project
          frontend
			   components
			   ...
          backend
                 models
                 controllers
			   ...
    2) independancies:
          backend: 
                 (1) npm init -y
                 (2) npm i express mongoose dotenv
                 (3) npm i save-dev nodemon
                 (4) npm i express-async-handler       (to use async await in express) 
             	  （5）npm i bcryptjs           (hide password)
          frontend:       
                 (1) npm i react-router-dom
                 (2) npm install semantic-ui-react semantic-ui-css
                 (3) axios


3. Images page:  API: https://unsplash.com/documentation

![image](https://user-images.githubusercontent.com/79877649/215948530-87a8cf29-97fe-48b8-84d2-d11724721bd1.png)

4. Poetry page:  API: https://github.com/thundercomb/poetrydb/blob/master/README.md

![image](https://user-images.githubusercontent.com/79877649/215949213-940cd339-bc03-4a39-9d2b-f3806ce4970d.png)

5. Stories page with only login user

![image](https://user-images.githubusercontent.com/79877649/215949556-4f4ae0e2-61ff-4750-aca2-bf753c8d3ce2.png)

6. Conditional show login / SignUp or DashBoard / Logout buttons on menu

![image](https://user-images.githubusercontent.com/79877649/215950018-b2d23e23-1837-4a8b-b0be-9f7612242af3.png)

7. Add, update, delete user data
![image](https://user-images.githubusercontent.com/79877649/216168029-ca5e5e51-473c-4cfb-bffd-fd425f68a23b.png)
![image](https://user-images.githubusercontent.com/79877649/216365434-ebb86e0a-1717-44e4-80e4-b9969a106a16.png)









