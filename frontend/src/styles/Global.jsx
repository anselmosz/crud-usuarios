import global from 'styled-components';

const Global = global`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`

export default Global;