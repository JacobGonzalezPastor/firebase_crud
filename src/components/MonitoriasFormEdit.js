import React from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap';
import Crearmont from '../functions/Crearmont';


const MonitoriasFormEdit = ({ isModalEditar, setIsModalEditar, actulizarEstadoMent, MentoriaEditar }) => {

  function EditarMonitoriaModal() {
    //obtener informacion
    const materia = document.getElementById("materia").value;
    const fecha = document.getElementById("fecha").value;
    const salon = document.getElementById("salon").value;
    //enviar info a firebase
    const infoMonitorias = { materia, fecha, salon };
    Crearmont(infoMonitorias);
    //cerrar modal
    actulizarEstadoMent();
    setIsModalEditar(false);
  }


  return (
    <Modal
      show={isModalEditar}
      OnHide={() => setIsModalEditar(false)}
    >
      <Modal.Header>
        <Modal.Title>Editar monitorias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Group controlId="form-group-monitor-materia">
              <Form.Label>Materia</Form.Label>
              <Form.Control controlId="1" type="text" placeholder="Materia" id='materia' />
            </Form.Group>
            <Form.Group controlId="form-group-fecha-salon">
              <Form.Label>Fecha</Form.Label>
              <Form.Control controlId="2" type="text" placeholder="Fecha" id='fecha' />
              <Form.Label>Salon</Form.Label>
              <Form.Control type="text" placeholder="Salon" id='salon' />
            </Form.Group>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setIsModalEditar(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={EditarMonitoriaModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default MonitoriasFormEdit