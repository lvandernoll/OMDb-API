# Movie Info

### About the assignment
In this assignment you are going to build an application in which you can search movies.
The application is going to be built in React. Whether you are going te use Redux or another statemanger or that you are going to build it stateless is your choice. But if you feel comfortable with React and are looking for a bit more challenge in this assignment then I recommend using a state management tool.
You can also use Typescript if you are looking for a bit more challenge.

### Typescript
If you are using Typescript then I have set up a config file. So that you don't have to dive into the settings yourself. 
You can overwrite the `tsconfig.json` in your project with the json you can find below.
In this json settings are enabled that will help you write better code that is less sensible for errors and coding mistakes.

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "jsx": "react",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "noImplicitReturns": true
  },
  "include": [
    "src"
  ]
}
```

### Requirements
The design and code structure for the application is up to you.

The requirements for the application are:
- Make use of the Open Movie Database (http://www.omdbapi.com/)
- Create a search functionality where in you can search for movies. After searching you have to display a list of found movies.
- Keep track of a search history, with the possibility to delete items from the search history.
- You can also create a functionality to clear the list. (not required).
- When selecting a movie form the list of found results all details of the movie has to be shown, including the image.
- There has to be an option to add the movie to favorites. Also the list of favorites has to be shown.
When clicking a favorite movie, the info has to be shown.
For the list of favorites there also has to be a possibility to delete a favorite movie from the list.

This assignment has to be made within three hours.

If you are not able to do it within three hours, then describe in the readme how you would have done the tasks that are missing in the project. This also has to be done within the three hours.

Send a link with the repository to maxim@competa.com and michiel@competa.com when you have finished the assignment or when the three hours has passed.

Good luck!