import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #root {
    background-color: #373F27;
    padding: 16px 4px;
  }
`;