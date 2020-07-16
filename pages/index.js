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
      <Hero src="https://vignette.wikia.nocookie.net/villains/images/a/a0/Mr._Daniel_Plainview.jpg/revision/latest?cb=20150329203424" />
      <Copy>"I drink your milkshake! I drink it up!"</Copy>
    </Container>
  );
}
