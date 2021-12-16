import React from "react";
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import api from "../../../Service/api";
import "./style.scss";
import { useState, useEffect, useContext} from "react";
import Header from '../../Header'
import { CarrinhoContext } from "../../../ContextApi/carrinhoContext.js";

const Home = () => {
  const [products, setProducts] = useState([]); // variaveis
  const {addItem} = useContext(CarrinhoContext);
  useEffect(() => { // ciclo de vida 

    api
    .get("/products")
    .then((Response)=> {
      setProducts(Response.data)
    })
    .catch((err) => {
      console.error("Erro" + err);
    });


  }, []);

    return (
        <>
        <Header />
        <Container>
        <Row xs={1} sm={2} lg={3} className="g-4">
        {products.map((itens) => (
          <Col key={itens.id}>
            <Card style={{alignItems: 'center'}}>
                <Card.Img variant="top" src={itens?.image} style={{  width: '250px', height: '250px' }} />
              <Card.Body>
                <Card.Title>{itens?.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{itens?.category}</Card.Subtitle>
                <Card.Text>{itens?.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{itens?.price}</Card.Subtitle>
                <Button variant="primary" onClick={() => addItem(itens)}>Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>  
        </Container>
        </>
    )
}

export default Home;