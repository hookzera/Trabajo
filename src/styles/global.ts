import { createGlobalStyle} from 'styled-components'
import backzada from "../assets/backzada.jpg"
export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #f0f0f5 url(${backzada}) no-repeat;
    -webkit-font-smoothing: antialised;
    font-family: 'Source Code Pro', monospace;

}

border, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button {
    cursor: pointer;
}
`;

