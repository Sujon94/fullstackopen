##React Architecture:
----------------------------------
Create Environment
----------------------------------
1. npx create-react-app pro_name
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
   ###### Defined a component named App. Which renders its contents into the div-element, defined in the file public/index.html, having the id value 'root'.
                                          
            import React from 'react';
            import ReactDOM from 'react-dom';
            import App from './App';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
            
            
   -[ ] app.js:
   
            const App = () => {
                return (
                    <div>
                        . . . 
                    </div>
                );
            }
    

1.Define id in html
2.

