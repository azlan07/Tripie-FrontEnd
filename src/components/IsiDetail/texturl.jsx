import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function TextURL1() {
  return (
    <section className="text-url">
      <Container>
        <div className="wrap-text">
          <p>
            Pesan &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp; &nbsp;{" "}
            <Link to ='/pilih-penerbangan' className="text-decoration-none">
            <span style={{ fontWeight: "400" }}>
              {" "}
              Pilih Penerbangan &nbsp; &nbsp; &nbsp;{" "}
            </span>{" "}
            </Link>
            / &nbsp; &nbsp; &nbsp; <span>Isi Detail</span>{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default TextURL1;
