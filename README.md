# VanLife -- learn react-router-v6

![Page layout](image.png)
--
[Demo](https://vanlife-3cf7c.web.app/)

## The story 🌟

I completed a **9-hour course** on [Scrimba](https://scrimba.com/learn/reactrouter6), where I learned hundreds of useful information and tricks. The course **was about implementing React Router v6** I took it on October 12th, 2023. Unfortunately, I didn't get the chance to write a README and add it to my GitHub account at that time. Nevertheless, **I believe that Better late than never.**

## Main goals of this project 📊

> My programmer friend, remember that **this repository and project have a specific goal and focus: to understand and learn React-Router-v6** by implementing all its features. **It's not necessary to add all of them in one project**, but rather important to learn about them and find the best place to use them. Let's keep this in mind and work towards achieving our goal.

## Let's begin by outlining the key takeaways from this readme and then diving into the code. 📝

## Our Goals: 🪄
1. [What is React Router v6 and why should we use it?](https)
2. [Routes and BrowserRouter]()
3. [Creating a fake server using `MirageJS`](https://miragejs.com/)
4. [Proper use of Link component]()
5. [Nested routes]()
6. [How to write a navbar using `<NavLink>`?]()
7. [Creating a host layout]()
8. [What is a relative path?]()
9. [The use and advantages of the `<Outlet/>` component]()
10. [Using `useSearchParams()`]()
11. [Using `useLocation()`]()
12. [Adding 404 pages in react-router-v6]()
13. [The uses of loaders]()
14. [The use of `<Suspense>` and `<Await>` in react-router-v6]()
15. [Using `useLoaderData()`]()
16. [Handling errors with react-router-v6 Using `useRouteError()` & `useActionData()`]()
17. [Using Firebase with react-router-v6]()
18. [Using `useNavigate()`]()
19. [Protected routes]()
---

### Here's a summary of the project's file structure: 🪜

1. The `api` folder contains two files:
    - `apiUtility.js` which has Firebase code.
    - `server.js` which is a fake MirageJS server used to fetch data.

2. The `public` folder has an `images` folder for the project.

3. The `components` folder has one subfolder and three files:
    - `layouts` - a folder that holds various components used throughout the project. More about it later. [Jump here..]()
    - `Error.jsx` - a file that handles error messages. More about it later. [Jump here..]()

4. The `pages` folder contains the website pages, including `About`, `Home`, `Host`, `Login`, `NotFound`, and `Vans`.

5. The `styles` folder has two files for the entire app:
    - `colors.js` - which defines the main colors for the app.
    - `index.css` - which handles basic styling.

6. The `utilities` folder contains frequently used functions for the app, following the DRY (Don't Repeat Yourself) software engineering principle.



## 1. What is React Router v6 and why should we use it? 🎨
In short, `React Router` is a popular library **that provides routing capabilities to React applications**. To navigate between pages on a website without using anchor tags. It allows you to handle navigation and routing within your application, **enabling you to create single-page applications (SPAs)** with multiple views or pages. Please follow this link to learn how to implement it in your project. [Read More](https://github.com/WajdWael/BakingCourses?tab=readme-ov-file#-how-can-i-smoothly-navigate-between-different-components-using-react-router-v6)


## 2. Routes and BrowserRouter 🎨


In React Router version 6, we used to wrap our `<Routes>` component within a `<BrowserRouter>` component. This was done to store the current location in the browser's address bar using clean URLs, and to navigate using a built-in history stack.

If you're struggling to grasp the concept, let's take a look at **real-world code**. 
```Html 
<a href="/pages/settings/settings.html">Settings</a>
<a href="/pages/projects/projects.html">Projects</a>
```
Suppose we want to **navigate between two pages** using a regular anchor tag. The first page, named `settings`, is located in a folder called `pages/setting/setting.html`. And another anchor tag that should take us to the `projects` page, which is located in the `pages/projects/projects.html` folder. However, **if we use a standard anchor tag, the browser will not update the folder name**, and the URL will appear as `pages/settings/projects.html`. To handle this issue, we can use React and its router library to create a **single-page application**. By implementing the `<BrowserRouter>` component in your code, **React will take care of the routing logic automatically**.

```JSx
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);
```

---

## 3. Creating a fake server using `MirageJS` 🎨

The best way to learn about a specific technology is to read from the creator's website. So I am quoting this from [Mirage docs](https://miragejs.com/docs/getting-started/introduction/).

> `Mirage` is a `JavaScript library` that lets `frontend developers` mock out backend APIs. Unlike other mocking libraries, **Mirage makes it easy to recreate dynamic scenarios**, the kind that are typically only possible when using **a real production server**.

If you want to practice `fetching data` using the `fetch()` function but don't have access to a real API or data, you can create a fake server that provides some **mock data** for you to play with.


In `servre.js` we got:
- The `seeds()` function is used to define the initial data for your Mirage server's database
- The `create()` function takes two parameters: the name of the model and an object containing your data...
- Mirage JS uses `routes()` to define API routes and handlers for your server, specifying how it responds to HTTP requests.


```JavaScript
// we import 3 main functions
import { createServer, Model, Response } from "miragejs"
createServer({

    // CREATING MODELS...
    models: {
        vans: Model,
        users: Model
    },

    // the seeds() function is used to define the initial data for your Mirage server's database
    seeds(server) {
        // The create() function takes two parameters: the name of the model and an object containing your data...
        server.create("van", { 
            id: "1", 
            name: "", 
            price: 60, 
            description: "...", 
            imageUrl: "/images/..", 
            type: "simple", 
            hostId: "123" 
            }
        ),
    },

    //Mirage JS uses routes() to define API routes and handlers for your server, specifying how it responds to HTTP requests.
    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000
        this.passthrough("https://firestore.googleapis.com/**")
        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
    }
})
```

---

## 4. Proper use of Link component 🎨

The `<Link>` tag is used for declarative navigation between different routes within your application in place of the anchor tag `<a>`.

```JSx
// Pages/Home/Home.jsx
import { Link } from 'react-router-dom';
const Home = () => {
  return <Link to="/vans">Find your van</Link>
}
export default Home
```

---

## 5. Nested routes 🎨

![Hierarchical Structure](https://thecontextofthings.com/wp-content/uploads/2015/05/hierarchy.jpg)

**What is the primary reason to use a nested route?**
- Whenever we have some shared UI between routes in our app.

**What is an `Index Route`?**
- It's the `default route` we want to render when the path of the parent route matches. It gives us a chance to render an element inside the parent's `<Outlet />` at the same path as the parent route.
```Jsx
<Route index element={<Home />} />
```

This is useful when you have **a hierarchical structure** in your application where certain components or pages have child components or sub-pages that also need their routes.

```JSx
// App.js
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    // All links within this route should begin with a forward slash (/).
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="vans" element={<Vans />} />
    <Route path="vans/:id" element={<VanDetail />} />


    // Here we have a sub-sub-link that should start with a forward slash (/) and the word 'host'. 
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      
      <Route path="vans" element={<HostVans />} />

        // Here we have a sub-sub-sub-link that everyone should start with (/), (host), and (van/id).
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />}/>
        <Route path="pricing" element={<HostVanPricing />}/>
        <Route path="photos" element={<HostVanPhotos />}/>
      </Route>
    </Route>
  </Route>
))
```
  1. All links within this route **should begin with a forward slash (/)**.
  2. Here we have **a sub-sub-link that should start with a forward slash (/) and the word 'host'**.
  3. Here we have **a sub-sub-sub-link that everyone should start with (/), (host), and (van/id)**.

---

## 6. How to write a navbar using `<NavLink>`? 🎨

Using `<NavLink>` is used for creating navigation links with active state management.

```JSx
// src/components/NavBar.jsx
import { Link, NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <Navbar>
            <Link className="logoPng" to="/">
                <img src="/images/logog.png" alt="Website Logo" />
            </Link>

            <nav className='navContainer'>
                <NavLink style={checkActive} to="host">Host</NavLink>
                <NavLink style={checkActive} to="about">About</NavLink>
                <NavLink style={checkActive} to="vans">Vans</NavLink>
                <Link className="userlogin" to="login">
                    <img src="/src/..." alt="user icon" />
                </Link>
            </nav>
        </Navbar>
    )
}
```

---

## 7. Creating a host layout 🎨

**What is a `Layout Route`?**
- It's the parent route of some nested routes that contains just the portion of the UI that will be shared. It will use an Outlet component.


Using a layout in React Router v6 provides a consistent UI structure, promotes code reusability, simplifies navigation, enables dynamic content, and separates layout from page-specific components. It helps create a better user interface, development experience, and a more maintainable application.

```JSx
// src/components/layouts/Layout.jsx

import NavBar from '../NavBar'
import Footer from '../Footer'

// To run the content for a specific separated page.
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;
```

And for specifc pages we have a different **layout**: 
```JSX
<Route path="host" element={<HostLayout />}>
     // This is the Outlet
    <Route index element={<Dashboard />}/> 
</Route>
```

**src/components/layouts/HostLayout.jsx**
```Jsx
import {NavLink, Outlet} from 'react-router-dom'
export default function HostLayout() {
    return (
        <section>
            <Nav>
                // The end attribute is used to indicate that the link should only be considered active when the URL exactly matches the specified path.
                <NavLink end to=".">Dashboard</NavLink>
                <NavLink to="income">Income</NavLink>
                <NavLink to="vans">Vans</NavLink>
                <NavLink to="reviews">Reviews</NavLink>
            </Nav>
            <Outlet className="container" />
        </section>
    )
}
```

---

## 8. What is a relative path? 🎨

In React Router v6, the concept of relative paths has been removed. Instead, React Router v6 introduces a new approach called "relative links" for creating links that are relative to the current route.

**src/Pages/Host/HostVanDetail/HostVanDetail.jsx**

```JSx
export default function HostVanDetail() {
    return (
        <HostAboutVan className='container'>
            <Link to=".." relative="path"></Link>
            <NavLink to=".">Details</NavLink>
            <NavLink to="pricing">Pricing</NavLink>
        </HostAboutVan>
    )
}
```

---

## 9. The use and advantages of the `<Outlet/>` component 🎨

**What does the <Outlet /> component do? when do you use it?**
- We use it anytime we have a parent Route that's wrapping children routes. It renders the matching child route's `element` prop given in its route definition.

It's a placeholder that renders the child route components defined in the routing configuration. It is typically used within a parent component to render the appropriate child component based on the current URL.

**We allready have seen it more than once in this project: let's recape the `Layout.jsx` file.**

```JSX
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;
```
```JSx
// App.jsx
//Here is the outlet it take the about content and replace the <Outlet> tag with it
<Route path="about" element={<About />} />
```

---

## 10. Using `useSearchParams()` 🎨
The useSearchParams() hook provides a way to access and manipulate query parameters in the URL. It allows you to read and update the query parameters associated with the current location.

In this snippet of code, we can see how it works in real life code. 

**src/Pages/Vans/Vans.jsx**
```JSx
import {useSearchParams}  from "react-router-dom"
export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const handleFilter = (key, value) => {
    setSearchParams(prevParams => {
      if (value == null) {
        prevParams.delete(key)
      } else { 
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  function renderVanElement(vans) {
      return (
        <>
            <button onClick={() => handleFilter("type", "simple")}> 
                Simple
            </button>
            <button onClick={() => handleFilter("type", "luxury")}>
                Luxury
            </button>
        </>
      )
  }
}
```

---

## 11. Using `useLocation()` 🎨

The useLocation() hook is used to access the current location object. It allows you to retrieve information about the current URL and react to changes in the location.

```JSx
import { useLocation } from "react-router-dom";

export default function VanDetail() {
  const location = useLocation()
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <DetailsSection>
      <Link to={`..${search}`} relative="path">
        <span className="arrow">&larr;</span>
        <span className="link-title">Back to {type} vans</span>
      </Link>
      <div className="card-bus">
          <section className="card-content">
            ...
          </section>
      </div>
    </DetailsSection>
  )
}
```

## 12. Adding 404 pages in react-router-v6 🎨
This '*' path acts as a catch-all route that matches any path that hasn't been matched by previous routes. You can add the new route either at the beginning or the end. Here is an example:

**App.jsx**
```JSx
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    ...
    <Route path="*" element={<NotFound />} />
  </Route>
))
```
---

## 13. The uses of loaders 🎨

> NOTE: To use loaders, you first need to make some changes in the way you run your routes. Specifically, you need to 
> * Get rid of the BrowserRouter component and use createBrowserRouter() instead. Can use createRoutesFromElements() to make the transition a bit easier.

These hooks come in handy when **you have data that needs to be displayed in your app**. **By utilizing loaders alongside React Router v6**, you can enhance the **user experience** while transitioning between routes or retrieving data for a specific route.

The benefit of using hooks is that you don't need to wait for the component to mount before **fetching the data**. Additionally, React Router can optimize loading multiple requests in parallel for **nested routes**, which was quite challenging in previous versions.

**When does the code in a loader function run?**
- Before the route change happens and the component for that route loads.

**What are the steps we need to take in order to use a loader on any given route?**
- 1. Define and export a loader function
- 2. Import the loader and pass it to the route we're wanting to fetch data for
- 3. Use the useLoaderData() hook to get the data from the loader function.

**What are some benefits of using a data loader function instead of fetching our data in a useEffect in a component?**
* Don't need to worry about handling loading state in the component
* Don't need to have lengthy/confusing useEffect code in our component
* Don't need to handle error state in the component


**In this project, we have a couple of code examples:**

**src/pages/Login/Login.jsx**
```JSx
export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}
```
And we run this loader function on the route in the main.jsx
```JSx
// import it from the file as loginLoader function name..
import Login, {loader as loginLoader} from "./pages/Login/Login" 
<Route 
    path="login" 
    element={<Login />} 
    loader={loginLoader} // here you run the loader
/>
```

**src/pages/Host/HostVans.jsx**
- This `defer()` returns the result of the defer function which uses "vans" obtained from getHostVans function.
```Jsx
export async function loader({ request }) {
    await requireAuth(request)
    // The defer() returns the result of the defer function which uses "vans" obtained from getHostVans function.
    return defer({ vans: getHostVans() })
}
```

**App.jsx**
```JSx
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
<Route path="vans" element={<HostVans />} loader={hostVansLoader} />
```

----


## 14. The use of `<Suspense>` and `<Await>` react-router-v6 🎨

![loading image...](https://media.istockphoto.com/id/1311491514/video/retro-loading-bar-animation-isolated-on-a-black-background.jpg?s=640x640&k=20&c=L-XP7g6eVCrsmxJ3q9t08II9jI7l9ey3lr5RrhRceuQ=)

In React Router v6, the `<Suspense>` component is used to enable **code-splitting** and **lazy loading** of routes. 

> **Code-splitting**, Is a technique that allows you to split your application's JavaScript bundle into smaller chunks, **Lazy-Loading** allows you to load those chunks dynamically only when they are needed.

Here comes the use of the `<Suspense>` provided by react-router-v6:

**src/pages/Host/HostSubTabs/Dashboard.jsx**
```Jsx
export default function Dashboard() {
  return (
    <DashboardSection>
      <section className="flex bgOrange">
        ...
      </section>
        // React renders "Loading..." until the lazily loaded component loads.
      <Suspense fallback={<h2 className="container">Loading...</h2>}>
        <Await resolve={loaderdata.vans}>{ renderVanElements }</Await>
      </Suspense>
    </DashboardSection>
  )
}
```

If you examine the code snippet provided, you will notice **the use of `<Await>` within the `<Suspense>` element**. These two components are closely related, **like siblings**, and cannot be used independently. We use the `<Await>` component to display deferred values with automatic error handling.

> NOTE: `<Await>` expects to be rendered inside of a `<React.Suspense>` or `<React.SuspenseList>` parent to enable the fallback UI. [Read More](https://reactrouter.com/en/main/components/await#await)

---

## 15. Using `useLoaderData()` 🎨

The `useLoaderData()` hook in React Router 6 is a powerful tool that **allows you to fetch data** for your routes and make it available to your components before they are rendered. [Read More](https://medium.com/@bobjunior542/master-the-react-router-6-useloaderdata-hook-a-comprehensive-guide-38eca47eaf25)

Let's refer to a code snippet from this project as usual:

**/src/pages/Host/HostVans/HostVans.jsx/**
```JSx
import { useLoaderData } from 'react-router-dom'
export default function HostVans() {
    const dataPromise = useLoaderData()
    ...
    return (
        <section>
            <Suspense fallback={<h2>Loading vans ...</h2>}>
            // run dataPromise
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>

        </section>
    )
}
```

**/src/pages/Host/HostSubTabs/Dashboard.jsx**
```JSx
import { useLoaderData } from 'react-router-dom'
export default function Dashboard() {
  const loaderdata = useLoaderData()
  return (
    <DashboardSection>
        ...
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderdata.vans}>
            { renderVanElements }
        </Await>
      </Suspense>
    </DashboardSection>
  )
}
```

**/src/pages/Login/Login.jsx**
```JSx
import { useLoaderData } from 'react-router-dom'
export default function Login() {
    const message = useLoaderData()
    return (
        <LoginSection className='container'> 
            {message &&
                <h2 className="errorMessage">{message}</h2>
            }
        </LoginSection>
    )
}
```

And more ...

---

## 16. Handling errors with react-router-v6 `useRouteError()` & `useActionData()` 🎨

![Error Image](https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png)

### The use of `useRouteError`

> Inside of an **errorElement**, this hook returns anything thrown during an action, loader, or rendering. But NOTE: This feature only works if using a data router. [Read More](https://reactrouter.com/en/main/hooks/use-route-error)

When an error occurs during an action, loader, or rendering within an [errorElement](https://reactrouter.com/en/main/route/error-element#errorelement), this hook will return the error. You can then pass the [errorElement](https://reactrouter.com/en/main/route/error-element#errorelement), which has been included in a component file, throughout all project files.

**/src/compoennts/Error.jsx**
```JSx
import { Link, useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    return (
        <div className="container">
            <center>
                <h1>Oops!!!!!</h1>
            </center>
            <h1>Error: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>

            <Link to="/">Go home!</Link>
        </div>

    )
}
```
**App.jsx**
```JSx
<Route 
    path="vans/:id" 
    element={<HostVanDetail />} 
    errorElement={<Error />} 
    loader={hostVanDetailLoader}
></Route>
<Route 
    path="vans" 
    element={<Vans />} 
    errorElement={<Error />} 
    loader={vansLoader}
/>
```

### The use of `useActionData`

The use of it out the React-Router-v6 website:
> This hook provides the returned value from the previous navigation's action result, or undefined if there was no submission.The most common use-case for this hook is form validation errors. If the form isn't right, you can return the errors and let the user try again, [Read More](https://reactrouter.com/en/main/hooks/use-action-data)...

Apps can change data using simple HTML and HTTP. With React Router, this process is easier and faster. React Router makes it easy to manage the user interface and update information.

`action` is an attrubite we pass it inside the `<Route>` element, that **enables applications to carry out data mutations using simple HTML and HTTP semantics**. **React Router**, on the other hand, **hides the complexity of asynchronous user interface and revalidation**. This combination **provides a simple mental model of HTML + HTTP**, where the browser handles the asynchrony and revalidation, while still providing the behavior and user experience capabilities **of modern single-page applications (SPAs)**.

```Jsx
import Login, {
    loader as loginLoader, 
    action as loginAction
} from "./pages/Login/Login"

<Route 
    path="login" 
    element={<Login />} 
    loader={loginLoader} 
    action={loginAction}
/>
```

**/src/pages/Login/Login.jsx**
```JSx
export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try {
        await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        const response = redirect(pathname)
        response.body = true
        return response
    }catch(err){
        return err.message;
    }
}
```






## 17. Using Firebase with react-router-v6 🎨

### 1. **What's Firebase?**
![Firebase Logo](https://firebase.google.com/images/social.png)

Firebase is a **Google platform** for mobile and web app development. It offers a range of tools and services to enable developers to build and manage apps more efficiently. Firebase features include **real-time database, authentication, cloud storage, hosting, cloud functions, cloud messaging, analytics, performance monitoring, and test lab**. Its comprehensive set of tools simplifies the development process, allowing developers to focus on building high-quality apps.

2. How to get the data and run it?

**/src/api/apiUtility.js**
You need to run a `getDoc()` function comes form Firebase to fetch and apply data...
```JSx
export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}
```

3. How to replce my MirageJS fake server with firebase database?
You need to add this line if code if you started your project using MirageJs fake server:

> The this.passthrough() method is a MirageJS function that allows requests to be passed through to the actual server instead of being intercepted and handled by the MirageJS fake server.

**/src/api/server.js**
```JSx
this.passthrough("https://firestore.googleapis.com/**")
```

## 18. Using `useNavigate()` 🎨

React Router is a popular routing library for React applications. It provides a declarative API for routing, making it easy to navigate between pages and handle URL changes. [Read More](https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430)...

**/src/pages/Login/Login.jsx**
```JSx
import { useNavigation } from 'react-router-dom'
export default function Login() {
    const navigation = useNavigation()
    return (
        <LoginSection className='container'> 
          <Form method="post" className="form">
              <button 
                  disabled={navigation.state === "submitting"} 
                  className="orange-btn"
              >
                  {navigation.state === "submitting"
                      ? "Logging in ..."
                      : "Log in"
                  }
              </button>
          </Form>
        </LoginSection>
    )
}
```

[Read More ...](https://reactrouter.com/en/main/hooks/use-navigate#usenavigate)

---

## 19. Protected routes 🎨

Let's move on to the last and most important topic in this repo. We will discuss how to apply protected routes in React with the assistance of React Router v6.

1. **How did we change our route definitions in order to "protect" certain routes from an un-logged-in user?**
- Wrapped the routes we wanted to protect in a Layout route that contains logic to redirect users if they're not logged in.


**/src/utilities/authUtil.js**
```Jsx
import { redirect } from "react-router-dom"
export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
        response.body = true  // It's silly, but it works
        throw response
    }
    return null
}
export const runRequireAuth = async ({request}) => {
    await requireAuth(request)
    return null
}
```

**/src/App.js**

- Load data after checking from the Auth...
```JSx
<Route 
    index 
    element={<HostVanInfo />} 
    loader={runRequireAuth}
/>
<Route 
    path="pricing" 
    element={<HostVanPricing />} 
    loader={runRequireAuth}
/>
<Route 
    path="photos" 
    element={<HostVanPhotos />} 
    loader={runRequireAuth}
/>
```

---

# 🌟🌟🌟🌟🌟

## This project required a lot of time and effort from me. **Please show your appreciation by giving a star 🌟 on GitHub!**
