# NYC TTP Take-Home Coding Challenge

## 1. Infinite-Scroll Challenge

Recreating Pinterest to showcase ability to implement an infinite-scroll feature. 

When arriving at the website, you are shown a sticky navbar. The bell icon will give a modal popup that gives a brief description of the website. The chat bubble icon will lead to my portfolio website `https://mleng.dev/`, while the user icon will redirect to my LinkedIn. Lastly, the "more" icon will not give a drop down menu, rather redirect to this GitHub Repo. 

You are able to scroll down the website and once you reach the bottom of the page, more cat/pins will populate the screen. You will be able to scroll down infinitely with the same 48 images of felines, but it will be randomized each time! :smile_cat:

**Prompt**: Pinterest is one of the most well-designed applications on the web that has you scrolling for hours! We’d love for you to implement this infinite scroll feature. Given a static dataset (JSON) of Pinterest Pins, design and implement a page that shows all the pins and allows infinite scrolling, reusing the Pins as needed. The implementation should be done in a modular way so that the rendering of Pins could be easily reused in other pages and this page could be given other widgets to arrange on the page and support infinite scrolling.

## Demo
![Demo](https://github.com/Mleng89/TTP-Pinterest/blob/main/public/References/Demo.gif)

## Prerequisites
Need lastest version of npm in order to run this project

## Getting started
```
cd Desktop        
git clone https://github.com/Mleng89/TTP-Pinterest.git         
cd TTP-Pinterest        
code .        
npm install       
npm run dev        

Open your browser and type in: http://localhost:3000/#/
```

## Scripts
`npm install` will install the dependencies that are listed below, these are required to run the project!

`npm run dev` will run the development server for the project.

## Dependencies 
- @types/react
- @types/react-dom
- @types/material-ui
- react
- react-dom
- styled-components
- typescript
- material-UI (@material-ui/core & @material-ui/icons)
- react-router-dom (for HashRouter)


## Reflection
> Learned: 
> - `getBoundingClientRect()` which is a webAPI that returns a `DOMrect` -- it gives information about the size of an element and its position relative to the viewport (ie: scrolling position).
> - Using TypeScript & Webpack, I need to install @types dependencies following library installations. For Webpack, if I am going to use certain files such as `.css` or `.svg, .png, .jpeg` I need a [`style-loader`.](https://webpack.js.org/loaders/style-loader/)

> Interesting notes:
> In order to recreate fetching, I had to create a `setTimeout`to make it seem as though it was making a `GET` request for more pins.

> Issues: Deciding how to implement logic of infinite scroll into code. Initially had a bug where on page load, the `json` file would duplicate and instead of having 48 items, the page would be populated with 96. Then once the window is scrolled to the bottom, loading of new `json` data would populate twice. At times when the user did not move the scroll bar, the `InfiniteScroll` function would trigger two or three times. Soon figured it was the boolean logic in the `main.tsx` file. Passing in true into `onLoad` was the issue as it would constantly trigger.


## Author
Matthew Leng |
[LinkedIn](https://www.linkedin.com/in/matthew-leng/) |
[Twitter](https://twitter.com/matthewleng) |
[Medium](https://mleng89.medium.com/)

## Acknowledgements

- Deployed using GitHub Pages: https://mleng89.github.io/TTP-Pinterest/#/
- Bootstrapped from my [react-typescript-boilerplate](https://github.com/Mleng89/react-typescript-boilerplate)
- Gathered inspiration from [Pinterest](https://www.pinterest.com/) with references gathered and saved [here.](https://github.com/Mleng89/TTP-Pinterest/wiki/References)
