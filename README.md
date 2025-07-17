# Namaste React 🚀

# NPM
Manages packages. Any packages you want to install in project, use npm. We can add npm to our project without create-react-app.
We get package.json which is the configuration for the "npm init" command. Sometimes the few packages are also called dependencies. NPM takes care of the verison of the package. Bundler is most important package in our package (Webpack, vite, bundler)
"create-react-app" uses webpack behind the screen. 
"npm install -D parcel":
There are two types are dependencies, dev (-D) and normal. 

# package-lock.json
Integrity field here says whatever is there is the local is the same version that is deployed in production

# package-lock.json vs package.json
package.json is configuration for npm, keeps track of what version of package is installed in our system. If "^", install any further versions.
package-lock.json keeps track of exact version of the package.

# node_modules
Contains all the code that we fed from npm. Parcel as a project has its own dependencies and those dependencies has their own dependencies. This is known as TRANSITIVE DEPENDENCY. This is why the user sees other folders apart from Parcel itself in the node_modules folder

### There are multiple package.json for each packages within the node_modules folder. There is a dependency tree. node_modules is a collection of dependencies.

# Should I put package.json and package-lock.json to the git?
Yes. They are maintaining the exact versions of our dependencies. Whatever is in the local should be the same in production. If we have package.json and package-lock.json, we can recreate all node_modules all over again

# PARCEL
# Check for parcel documentation 📖
- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File Watching Algorithm - written in C++
- parcel-cache: Faster builds
- Image Optimisation
- Minification of file due to its bundling behaviour
- Compress the file, ships to the production
- Consistent Hashing
- Code splitting
- Differential Bundling: When app is hosted, the app can you opened inside older version of Internet Explorer, safari, chrome and makes them run smoothly on older browsers
- Diagnostic Features: Error handling
- Https
- Tree Shaking algorithm: Inside codebase, parcel removes unused code for the user. 
- Different dev and production bundles

# BUILD
- To create a prod build, "npx parcel build index.html", it will bundle and minify and many things, and puts those in dist folder

# THIS IS WHAT IS INSIDE create-react-app

# Create the npm scripts in the package.json folder
- Check the scripts property and I have added the start and build key