/// <reference path="./types/vendors/cool-images.d.ts" />
import ReactDOM from "react-dom";
import io from "_services/io/io.service";

setTimeout(() => {
  console.log(io);
}, 1000);

ReactDOM.render(<h2>open console01</h2>, document.getElementById("root"));
