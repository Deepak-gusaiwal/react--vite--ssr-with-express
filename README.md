Step 1 :- remove this code: // ReactDOM.createRoot(document.getElementById('root')).render( // <React.StrictMode> // // </React.StrictMode>, // )

step 2 :- place this code: import ReactDOM, { hydrateRoot } from "react-dom/client"; const domNode = document.getElementById("root"); hydrateRoot(domNode, );

step 3 :- create build (npm run build);

step 4 :- create a folder of ssr same level of src folder of react js -- and create index.js and server.js in it

step 5 :- install some packages for ssr npm i @babel/preset-env @babel/preset-react @babel/register express ignore-styles

step 6 :- create a server using express and configure the ssr with it (you can find full code in ssr/server.js);

step 7 :- configure the ssr/index.js (code will be there)

step 8 :- change the type:"module" to type:"common.js" in package.json file

step 9 :- now run npx nodemon index.js in ssr folder (need nodemon to be already installed)