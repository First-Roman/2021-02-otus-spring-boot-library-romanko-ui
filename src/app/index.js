import React from "react";
import {render} from "react-dom";
import MainLayout from "./component/mainLayout";

window.React = React;

render(<MainLayout/>, document.querySelector(".library-app"));