import './styles/app.scss';

import * as React from "react";
import * as ReactDom from "react-dom";

import { Hello } from "./ts/components/Hello";

ReactDom.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);