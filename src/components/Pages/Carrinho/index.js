import Header from '../../Header';
import { useContext, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { CarrinhoContext } from '../../../ContextApi/carrinhoContext';


const Carrinho = () =>{
    const { cartItems } = useContext(CarrinhoContext)
    const { removerItem } = useContext(CarrinhoContext)
    useEffect(() => {
        console.log(cartItems)
    },[])
    return (
        <>
            < Header />
            <h1>Carrinho</h1>
            <Container>
        <Row xs={1} sm={2} lg={3} className="g-4">
        {cartItems.map((itens) => (
          <Col key={itens.id}>
            <Card style={{alignItems: 'center'}}>
                <Card.Img variant="top" src={itens?.image} style={{  width: '250px', height: '250px' }} />
              <Card.Body>
                <Card.Title>{itens?.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{itens?.category}</Card.Subtitle>
                <Card.Text>{itens?.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{itens?.price}</Card.Subtitle>
                <Button variant="danger" onClick={() => removerItem(itens)}>Remover</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>  
        </Container>
        </>
    )}
export default Carrinho;