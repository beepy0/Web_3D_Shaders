# Browser_3D_Shaders

<img src="/demo_gifs/web_3D_shaders.gif" width=700/>

A 3D browser environment that simulates a few different shading techniques. [Demo link](https://branimirs-page.herokuapp.com/web3d/)

- Uses [THREE.js](https://threejs.org/) to render 3D environments
- Written in JavaScript

## How to use
- Use the [Demo Link](https://computer-graphics-shaders.herokuapp.com/) or import  into an IDE and load into the browser locally 
- Switch shaders from the dropdown menu
- Magnitude corresponds to the strength of the shader
- lightX/Y/Z will move the light source in the X/Y/Z dimension
- It is a full 3D environment, you can zoom-in/-out (scroll-wheel), rotate the view (left mouse button), or pan the view (right mouse button)

## Notes
- THREE.js is a JavaScript 3D-rendering library, so the entirety of the implementation can be found in `index.html` and the corresponding javascript code under `js/`
- This is one of my earlier projects, before I read anything on Clean Code.
