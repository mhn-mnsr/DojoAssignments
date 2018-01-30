const headline = React.createElement("h1", null, "Hello Dojo!")

const subhead = React.createElement("h3", null, "to do:")
const li1 = React.createElement("li", null, "Learn React")
const li2 = React.createElement("li", null, "Climb Everest")
const li3 = React.createElement("li", null, "marathon")
const li4 = React.createElement("li", null, "feed dogs")
const list = React.createElement("ul", null, li1, li2, li3,li4)
const container = React.createElement("div", null, headline, subhead, list)

ReactDOM.render(container, document.getElementById("app"))