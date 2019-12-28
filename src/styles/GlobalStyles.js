import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
       box-sizing:border-box;
        padding:0;
        margin:0;
        padding: 0;
        max-width:100%;

    }
    html { font-size: 62.5%; } 

    body {
        font-family: 'Roboto', sans-serif;
        
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyle