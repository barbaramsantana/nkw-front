import styled from "styled-components";

export const ContainerForm = styled.div`
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px 50px 0px 0px;
  margin-left: 10rem;
  margin-right: 10rem;
`;
//font-family: NTR;
export const Logo = styled.div`
font-style: normal;
font-weight: normal;
font-size: 100px;
line-height: 212px;
color: #BB6BD9;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Titulo1 = styled.div`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 30px;
/* identical to box height, or 75% */


color: #3A3C4E;
`;

export const Label = styled.label`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 30px;
/* identical to box height, or 100% */


color: #3A3C4E;
`;

export const Attention = styled.p`
  color: red;
`;

export const Input = styled.input`
background: #F4F4FC;
border: 1px solid #E4E9F2;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
height: 50px;
margin-top: 20px;
justify-content: left;
align-items: left;
text-align: left;
::placeholder{
  color: #8F9BB3;

}
`;
export const Button = styled.button`
background: #BB6BD9;
border-radius: 8px;
color: #FFFFFF;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 30px;
border-bottom: 0px;
border:none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

&:hover{
  color: #BB6BD9;
  background:#FFFFFF;
  border-color:#BB6BD9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;

export const TextoLink = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */


color: #BB6BD9;

text-decoration: none;
`;