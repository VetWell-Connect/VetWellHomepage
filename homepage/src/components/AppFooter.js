import React from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function AppFooter() {
  return (
    <footer class="py-5 my-5 bg-dark">
      <Container className="px-4">
        <p class="text-center text-white">
          Copyright &copy; VetWell Connect 2023
        </p>
      </Container>
    </footer>
  );
}

export default AppFooter;
