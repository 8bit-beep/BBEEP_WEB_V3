import { Outlet } from "react-router-dom";
import { Container, ExceptFooter, ExceptHeader } from "./style";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <ExceptHeader>
        <ExceptFooter>
          <Outlet />
        </ExceptFooter>
        <Footer />
      </ExceptHeader>
    </Container>
  );
};

export default RootLayout;
