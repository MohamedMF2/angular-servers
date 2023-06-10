# Angular Server Elements App

This is an Angular app that displays a list of server elements, including headers, images, and paragraphs. Users can also add new server or blueprint elements to the list.

## Installation

To install and run this app, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal or command prompt.
3. Run `npm install` to install the app's dependencies.
4. Run `ng serve` to launch the app in your browser.

## Components

This app includes three Angular components:

### App Component

The `AppComponent` is the main component of the app. It includes the `serverElements` array, which contains the list of server elements to be displayed. The `AppComponent` also includes two methods, `onServerAdded()` and `onBlueprintAdded()`, which are used to add new server or blueprint elements to the list.

### Cockpit Component

The `CockpitComponent` is a child component of the `AppComponent`. It includes input fields for the server name and content, as well as buttons for adding either a server or blueprint element. When a user clicks one of the "Add" buttons, the `CockpitComponent` emits an event that passes the new server or blueprint information to the parent `AppComponent`.

### Server Element Component

The `ServerElementComponent` is a child component of the `AppComponent`. It displays a single server or blueprint element in a card, with the element's name and content displayed in either bold (for server elements) or italic (for blueprint elements) text.

## Usage

Once the app is installed and running, you can use it to display and add server elements.

To display the existing server elements, navigate to the app component template (`app.component.html`). This template includes a `server-element` component that uses `*ngFor` to iterate over the `serverElements` array and create a new instance of the `server-element` component for each element.

To add a new server or blueprint element, use the `app-cockpit` component. This component includes two input fields for the server name and content, as well as buttons for adding either a server or blueprint element. When you add a new element, the app will emit an event that adds the new element to the list of server elements.

## Contributing

If you would like to contribute to this app, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Submit a pull request to the main repository.

## License

This app is licensed under the MIT license. See the LICENSE file for more information.
