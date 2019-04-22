# Patient Tracker 👩‍⚕️⏱

This application intends to track patients through multi-step clinical processes and upload this data to a data store.

Each patient has a QR code that can be scanned, placing them in a rudimentary queue. The queue

### Getting started

Patient Tracker is powered by JavaScript and the React Native framework.

#### 1. Clone the repository

Clone this repository with your favourite git client!

#### 2. Set up your editor

You can use any editor you like for this application, but I would recommend [Visual Studio Code](https://code.visualstudio.com/). It has a number of great pre-built extensions for modern code editing and is absolutely free. It has an extension system letting it support all kinds of languages and tools in a helpful manner.

Open up the root directory of this repo in the editor for the best and most comprehensive view around the project.

#### 3. Install the dependencies

- Ensure you have [nodejs](https://nodejs.org/en/) installed on your machine. This will run our code. The LTS (long term support) version is fine!
- Ensure you have [yarn](https://yarnpkg.com/lang/en/) installed
- In the root of this repository run the `yarn` command to install project dependencies. This will go to a repository called `npm` and fetch all the little extra bits of public code our project relies on.

#### 4. Running code on our phones

If you have an android device, great! Install `expo` on it, which you can find in the Google Play app store. If not, launching an emulator will do fine.

Run `yarn start` in the terminal and React Native will start putting code together into a bundle. When it's done, it'll show a QR code that you can scan with the `expo` android app and ta-da, your code _magically_ runs on the device. If you're running an emulator on your machine, Patient Tracker without need for a QR scan.

If you're having a problem with this part, check out the [React Native docs](https://facebook.github.io/react-native/docs/getting-started#running-your-react-native-application);

### Contributing

The application is open and grateful for all your help! If you want to contribute, please check out the issues at the top of the project to see what needs doing. Should something important be missing, we would be happy for you to add it.

For Pull Requests, it would be beneficial to stakeholders in this project to clearly state the problem you are solving, how you did it, and why you did it that way.

And include a gif, if you want to be cool.

#### Technology

Patient Tracker is built on a prominent stack of [React Native](https://facebook.github.io/react-native/), [Redux](https://redux.js.org/), and [React-Native-Paper](https://reactnativepaper.com/).

**React-Native** is a framework for building mobile applications using a declarative component style, which run on both iOS and Android. It abstracts away a lot of the tiresome work that you would normally have to consider when making an application in a more classical approach.

**Redux** is the state container for our application. It provides a convenient way to store data in the application between screens, and even between applications. It is architected in a way to provide a great developer experience with a minimal chance of mutating internal data incorrectly.

**React-Native-Paper** is a component library that provides pre-made (and pre-styled) React components following the modern Material Design system endorsed by google. This allows you to quickly compose together a professional looking app that you can be confident will render consistently across apps.

#### Structure

The code is structured into folders broadly representing the purposes of the files inside.

The top (root) level has few entry points (where the app is started from) as well as configuration files that tell the application how to build and run. It also includes `i18n.js`, which is where we keep our translations for now.

**Assets** holds all the non-code files we might need, like fonts or images.

**Components** contains a number of React components we've written that when composed together, build the app.

**Navigation** is made entirely of code that tell us how to navigate around the application. This one's small!

**Screens** These are entry points for each screen in the app, with each screen having access to state, navigation and made of components.

**State** State is how we store and manage both user interface and patient data.

## Remaining items to do before shipping

- [ ] Languages
- [ ] Server communication (need API spec)
- [ ] Manual testing
- [ ] Deploy pipeline
