#Sample

#Output
![image](https://github.com/Rishang-yadav/starwars-dashboard/assets/122287155/662ce8d5-9694-46b9-865c-ca16bc20def0)

#Introduction


This Star Wars Dashboard project is a React web application that displays information about Star Wars characters, planets, and starships using the Star Wars API.


#Design decisions:

Header component: The Header component is used to display the title of the application. It was created as a separate component to make it easier to update the title or add additional content to the header in the future.

SideMenu component: The SideMenu component is used to display a list of categories (characters, planets, and starships) that the user can select from. The component was created to provide a consistent and easily navigable UI for the user.

Content component: The Content component is used to display the data for the selected category (characters, planets, or starships). It was created as a separate component to make it easier to update or modify the UI for each category.

CSS: The CSS file 'App.css' is used to style the UI components. It was used to define the layout, color scheme, and font styles for the application.

Fragments: The App component uses a fragment (<> </>) to wrap the header, body, and footer components. This is a convenient way to group multiple components together without having to use a div.

#Installation 

npx create-react-app my-app

cd my-app

npm start

import { Link } from 'react-router-dom';

#github url:https://github.com/Rishang-yadav/starwars-dashboard

#deploy url:https://64c7f8a4eaeeec32a965acb2--unrivaled-cuchufli-543e92.netlify.app/

