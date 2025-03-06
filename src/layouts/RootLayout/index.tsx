import { Outlet } from "react-router-dom";
import { Container, ExceptFooter, ExceptHeader } from "./style";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

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
