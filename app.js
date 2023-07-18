const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World with React!" //children
); // its return react element which is basically object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // takes a object and convert into h1 tag and put it into DOM
