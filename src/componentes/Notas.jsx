import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';

const NotasComponente = () => {
    const [datos, setDatos] = useState([]);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevaNota, setNuevaNota] = useState('');
    const [editarId, setEditarId] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
  
    const agregarDato = () => {
      if (nuevoNombre.trim() !== '' && nuevaNota.trim() !== '') {
        setDatos([...datos, { id: Date.now(), nombre: nuevoNombre, nota: nuevaNota }]);
        setNuevoNombre('');
        setNuevaNota('');
      }
    };
  
    const editarDato = (id) => {
      const datoEditar = datos.find((dato) => dato.id === id);
      setNuevoNombre(datoEditar.nombre);
      setNuevaNota(datoEditar.nota);
      setEditarId(id);
      setMostrarModal(true);
    };
  
    const actualizarDato = () => {
      setDatos((prevState) =>
        prevState.map((dato) =>
          dato.id === editarId ? { ...dato, nombre: nuevoNombre, nota: nuevaNota } : dato
        )
      );
      setNuevoNombre('');
      setNuevaNota('');
      setEditarId(null);
      setMostrarModal(false);
    };
  
    const eliminarDato = (id) => {
      setDatos(datos.filter((dato) => dato.id !== id));
    };
  
    const cerrarModal = () => {
      setNuevoNombre('');
      setNuevaNota('');
      setEditarId(null);
      setMostrarModal(false);
    };
  
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h2>Anota tu Nombres y tus Notas</h2>
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formNota">
                <Form.Label>Nota</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese una nota"
                  value={nuevaNota}
                  onChange={(e) => setNuevaNota(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={agregarDato}>
                Agregar
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Nota</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.nota}</td>
                    <td>
                      <Button variant="info" onClick={() => editarDato(dato.id)}>
                        Editar
                      </Button>{' '}
                      <Button variant="danger" onClick={() => eliminarDato(dato.id)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Modal show={mostrarModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Dato</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNombreModal">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formNotaModal">
                <Form.Label>Nota</Form.Label>
                <Form.Control
                  type="text"
                  value={nuevaNota}
                  onChange={(e) => setNuevaNota(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={actualizarDato}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  };

export default NotasComponente;
