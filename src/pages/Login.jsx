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
width: 25%;
padding: 20px;
background-color:white;
${mobile({ width: "75%"})}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: ; 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;
 
const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin:10px 0px ;
 padding: 10px;
`;



const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;


`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12ppx;
text-decoration: underline;
cursor: pointer;
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title> SIGN IN </Title>
                <Form>
                <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOGIN</Button>
                    <Link> FORGOT PASSWORD?</Link>
                    <Link> CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login  
                   
                   
                    
