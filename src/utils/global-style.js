import { createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

const GlobalStyle = createGlobalStyle`
body {
    height: calc(100vh - 10rem);
    
}
`
export default GlobalStyle
