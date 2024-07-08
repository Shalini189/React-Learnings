const heading = React.createElement("div",{id:"parent", xyz:"abc"},["my first react program",
React.createElement("div",{id:"child"}, React.createElement("h1",{},"h1 tag")),
React.createElement("div",{id:"child"}, React.createElement("h1",{},"h1 tag"))
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
const para = ReactDOM.createRoot(document.getElementById("par"));
root.render(heading);
para.render("jjs")
