# Shortly

## Introduction

A Next + Typescript project, which provides a way for users to shorten a valid URL. It is a responsive web app.

Some of its features are:

- Get a short link from the Shrcode API;
- Check for empty values and handle erros coming from the API;
- Automatically copies short link when button "Copy" is clicked;
- List every URL requested;
- Persist the list of short links, so it still there after a page refresh;
- Feedback a loader when requests take to long to finish.

---

## Technologies

Adding up to the required NextJS and Typescript, there were some other technologies and libraries used:

- MobX and MobX React: used to create a connection between View and ViewModel via observables and observer.
- Sass / Scss: the CSS preprocessor was chosen to take advantage of their nesting properties, mixins and constants.
- CSS Modules: the main way of styling. It was my first time using it, so there might have a lot of room to change.
- Jest and React Testing Library: used for component testing (both), model and viewmodel logic (Jest).

---

## Architecture and layers

This project uses the MVVM architecture. There are three layers:

- Model: domain level, domain interfaces and specifications, services (for api communication). It is independant and it communicates with the View Model layer.
- View Model: it is a connection between the Model and the View. It contains business logic and it can update the Model and notify the View.
- View: the presentation layer that contains React components. It communicates with the View Model to get data.

They have their own folders (`model`, `viewmodel` and `view`).

Apart from them, we also have, in the `root`:

- `design`: visual UI of the project to be used as a reference
- `pages`: NextJS pages. There are some hidden pages to set up meta data and import fonts
- `public`: stores favicon

### Model

The model holds the domain of the project and the service required to get information from the API. It currently does not use any robust serializer library.

The domain contains interfaces and classes that map the data from the request, so the View Model knows how to manipulate it.

The service has only one method which makes a GET request to the Shrcode API. It receives and map the data to match the domain's `Shortlink`.

### ViewModel

There is currently only one ViewModel, called `ShortenLinkViewModel`, which handles the system states (shortlinks, loading and error). It is an observable (using `makeAutoObservable()` MobX method).

As an additional functionality, it stores and retrieves data from LocalStorage to pesist data in the user's browser.

### View

Its root directory holds the `Home` folder, which can be interpret as a page content. Inside, the `components` folder contains the building parts of the page and the `styles` folder contains all components `.scss` files.

The `shared` directory contains:

- `assets`: images used in the project
- `components`: components that are meant to be used in not a specific page
- `data`: view specific data, such as section texts and router links
- `styles`: general and global styles

---

### Future improvements

- Add more view tests
- Add try/catch for failed requests
- Evaluate accessibility
- Check for performance improvements
- Check better way to handle svg (for testing)
- Refactor scss and shared components
- Use (de)serialization library
