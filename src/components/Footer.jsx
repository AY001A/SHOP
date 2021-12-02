import styled from "styled-components"
import {Room, Phone, MailOutline, Facebook, Instagram, Twitter, Pinterest, } from "@material-ui/icons"
import {mobile} from "../responsive"



const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`; 

const Left = styled.div`
flex: 1;
display:flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin: flex;
`;

const SocialContainer = styled.h1`
flex: 1;
`;

const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display:flex;
align-items: center;
justify-content: center;
margin-right: 28px;
`;


const Center = styled.div`
flex: 1;
paddiing: 20;
${mobile({display:"none"})}
`;

const Title= styled.h3`
margin-bottomm: 30px;
`;

const List= styled.ul`
margin: 0;
padding: 0;
list-styles: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem= styled.li`
 width: 50%;
 margin-bottom: 10;

`;

const Right = styled.div`
flex: 1;
paddiing: 20;
${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-item: center;
`;

const Payment = styled.img`
width: 50%;

`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>There are many variations of passages of lorem ipsuum available,but
                the majority have sufferd alterations kfdhhadujdjk kjshjjasdjhj ksefgghfguhsjk hjah
                hjasvdfhjsjkjksdbjk.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                        <Instagram/>
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                        <Twitter/>
                        </SocialIcon>
                        <SocialIcon color="E60023">
                        <Pinterest/>
                        </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title> Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men</ListItem>
                    <ListItem>Women</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>T and C</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 31 heaven street, abuleegba jdjjh
                    </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> 419-77992432
                    </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> ade@gboy.wetinwegain
                    </ContactItem>
                <Payment src ="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
            
        </Container>
    )
}

export default Footer
