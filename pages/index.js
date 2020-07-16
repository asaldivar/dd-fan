import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 10%;
`;
const Hero = styled.img`
  width: 70%;
  display: flex;
  justify-self: right;
`;
const Copy = styled.h1`
  width: 70%;
  display: flex;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Hero src="https://www.indiewire.com/wp-content/uploads/2017/12/11062346_939719442745662_6329262082203731115_n.jpg?w=780" />
      <Copy>"Don't bully me Daniel!"</Copy>
    </Container>
  );
}
