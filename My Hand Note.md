##React Architecture:
----------------------------------
Create Environment
----------------------------------
1. npx create-react-app pro_name
   or
   npm create vite@latest projectName -- --template react
2. cd pro_name
3. npm start
----------------------------------
-Let's start
----------------------------------
###Files to be considered
-[ ] index.html
-[ ] index.js
-[ ] app.js
##### configure:
   -[ ] index.html: 
   ###### All content that needs to be rendered inside div is usually defined as React components.
   
            <div id="root"></div>
            
   -[ ] index.js: 
   ###### Defined a component named ABC. Which renders its contents into the div-element, defined in the file public/index.html, having the id value 'root'. Here importing content of App.js as ABC, and rendering into root.
                                          
            import React from 'react';
            import ReactDOM from 'react-dom';
            import ABC from './App';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <ABC />
                </React.StrictMode>
            );
            
            
   -[ ] app.js: 
   ######This is a module. Which write the defination of components, and returns the components using "export default const_name" keyword. 
   ######Note: Always start <a href="https://reactjs.org/docs/components-and-props.html">component</a> names with a capital letter. React treats components starting with lowercase letters as DOM tags
 
            const Content = () => {
                return (
                    <div>
                        . . . 
                    </div>
                );
            }
            export default Content;
    
   ######Here arrow function ()=>{} is used. Can render dynamic content inside of a component.
   
            const Content = () => {
                const date = new Date();
                const a = 10;
                const b = 20;
                
                return (
                    <div>
                        <p>{date.toString()}</p>
                        <p>{a+b}</p>
                    </div>
                );
            }
            
   ######Any JavaScript code within the {curly} braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component.
   
   !!! These are not HTML these are called <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>. !!!

-----------------------------
JSON server
-----------------------------
##### install json server globally

> npm install -g json-server

*By default json-server starts running on port 3000*

> json-server --port 3001 --watch db.json
 
* The --watch option to track changes in json file*

###### install json-server locally

> npx json-server --port 3001 --watch db.json

---------------------------------
AXIOS to communicate with server
---------------------------------
````
import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

const create = newObject => {
const request = axios.post(baseUrl, newObject)
return request.then(res => res.data);
}

const getAll = () => {
const request = axios.get(baseUrl)
const nonExisting = {
id: 10000,
content: 'This note is not saved to server',
important: true
}
return request
.then(res => res.data.concat(nonExisting));

}

const update = (id, newObject) => {
const request = axios.put(`${baseUrl}/${id}`, newObject)
return request.then(res => res.data);

}

export default {
/*getAll: getAll,
create: create,
update: update
or
*/
getAll, create, update}
````

-------------------------
Node and Express
-------------------------
To initialize node with package.json
> npm init

which will create a package.json file with
```
{
  "name": "backend",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Matti Luukkainen",
  "license": "MIT"
}
```
To ease server-side development with Node Express provide a better interface.
##### To install Express
> npm install express

This will add dependency inside package.json and all the module files inside node_modules directory in project root.

##### Update the dependencies of the project
> npm update

##### To install all the dependency in another computer just copy the package.json and run following
> npm install

Nodemon used to automatically reloaded after changes made like react. Following line add nodemon to devDependencies.
#### To install
> npm install --save-dev nodemon
#### To run the application
> node_modules/.bin/nodemon index.js