import styled from "styled-components";

export const LoginContainer =styled.main`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 80%;
  height: 90%;
  
  gap: 25%;
  img{
    width: 100px;
    height: 40px;
    margin: 0 auto;
  }
 
`

export const LoginForm =styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button{
    font-size: 1.3rem;
  }
  
  label{
    p{
      font-size: 0.7rem;
      color: var(--red);
      margin-top: -9%;
    }
  }

  input {
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    border: 1px solid rgba(255, 255, 255, 0.03);
    width: 300px;
    height: 50px;
    margin-bottom: 10%;
    transition: all .3s ease-in;

    color: white;
    text-align: center;
    &:focus {
      border: 1px solid var(--red);
      outline: none;
      background-color: transparent;
      &::placeholder{
        visibility: hidden;
      }
      &::-ms-reveal {
        filter: invert(100%);
      }
    }

    &::placeholder {
      color: #9a9a9a;
      transition: all .1s ease-in;
    }
  }
`