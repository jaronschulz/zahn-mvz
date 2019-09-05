import { createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

const GlobalStyle = createGlobalStyle`
body {
    background: red;
}
`
export default GlobalStyle
