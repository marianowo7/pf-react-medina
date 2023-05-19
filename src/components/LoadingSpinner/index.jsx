import React from "react";
import { Container } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <Container>
      <img src="#" height="380" width="480" alt="logo" className="img-fluid" />
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
}

export default LoadingSpinner;
