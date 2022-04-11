import React, { useState } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap';
import Crearmont from '../functions/Crearmont';


const MonitoriasFormEdit = ({ isModalEditar, setIsModalEditar, actulizarEstadoMent, monitoriasEditar, setMonitoriasEditar }) => {

  function EditarMonitoriaModal() {
    //obtener informacion
    const materia = document.getElementById("materia").value;
    const fecha = document.getElementById("fecha").value;
    const salon = document.getElementById("salon").value;
    //enviar info a firebase
    const infoMonitorias = { materia, fecha, salon };
    Crearmont(infoMonitorias);
    //cerrar modal
    setMonitoriasEditar(null);
    actulizarEstadoMent();
    setIsModalEditar(false);
  }

  const [monitoriasEstado, setMonitoriasEstado] = useState({ ...monitoriasEditar });

  return (
    <Modal
      show={isModalEditar}
      OnHide={() => {
        setIsModalEditar(false)
        setMonitoriasEditar(null);
      }
      }
    >
      <Modal.Header>
        <Modal.Title>Editar monitorias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Group controlId="form-group-monitor-materia">
              <Form.Label>Materia</Form.Label>
              <Form.Control controlId="1" type="text" placeholder="Materia" id='materia' value={monitoriasEstado?.materia}
                onChange={(e) => setMonitoriasEstado({ ...monitoriasEstado, materia: e.target.value, })} />
            </Form.Group>
            <Form.Group controlId="form-group-fecha-salon">
              <Form.Label>Fecha</Form.Label>
              <Form.Control controlId="2" type="text" placeholder="Fecha" id='fecha' value={monitoriasEstado?.fecha}
                onChange={(e) => setMonitoriasEstado({ ...monitoriasEstado, fecha: e.target.value, })} />
              <Form.Label>Salon</Form.Label>
              <Form.Control type="text" placeholder="Salon" id='salon' value={monitoriasEstado?.salon}
                onChange={(e) => setMonitoriasEstado({ ...monitoriasEstado, salon: e.target.value, })} />
            </Form.Group>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => {
          setIsModalEditar(false);
          setMonitoriasEditar(null);
          }}>
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