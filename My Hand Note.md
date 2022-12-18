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
