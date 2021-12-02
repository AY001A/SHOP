import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear 
-gradient(
    rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)
    ),
    url ("https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F425%2F616%2Fpng-clipart-woman-winter-dress-clothing-women-s-skirt-with-winter-women-accessories-fashion.png&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-bacct&tbnid=fY6EZfsmjsGNDM&vet=12ahUKEwibj636rbv0AhWWwYUKHXEZCNwQMygjegUIARCWAg..i&docid=r9Sfi4okCYiy8M&w=900&h=600&itg=1&q=dress%20fashion%20png&hl=en&ved=2ahUKEwibj636rbv0AhWWwYUKHXEZCNwQMygjegUIARCWAg")
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `;


const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;
${mobile({width: "75%"})}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: ; 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
 
const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 20px 10px 0px 0px;
 padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;


`;




const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title> CREATE AN ACCOUNT </Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="lastname"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement> By creating an acount bla bla bla bla bla la bla bla bla</Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
            
        </Container>
    )
    
}

export default Register
