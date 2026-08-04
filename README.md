## Project Steps

1. Create project using Vite.

2. Clear unwanted codes and files.

3. Install necessary node packages.

   - install material ui
   - add bootstrap cdn link
   - add google fonts with cdn
   - install react-icons
   - update `index.css`
   - update website icon & title

4. Create a folder for pages. Create components for main pages.

5. Create a folder for components. Create components such as header, footer, etc.

6. Provide paths to page components using `react-router-dom`.

7. Design components.

8. To make API calls.

   - create `api` folder in `src` and,

     - create `axiosInstance.js`, define axios instance and interceptors in js file
     - create `apiService.js` file where we define common api steps

   - create `services` folder in `src` and,

     - create `allApiServices.js` file, and define individual functions for individual api calls