import React from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap';
import Registarmonitor from '../functions/Registarmonitor';

const MonitoresForm = ({ isModalRegistar, setIsModalRegistrar, actulizarEstadoMoni }) => {

    function CrearMonitorModal() {
        //obtener informacion
        const nombres = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellido").value;
        const carrera = document.getElementById("degree").value;
        const semestre = document.getElementById("semester").value;
        const cedula = document.getElementById("cedula").value;
        const info_contact = document.getElementById("contact").value;
        //enviar a firebase
        const infoMonitor = { nombres, apellidos, carrera, semestre, cedula, info_contact };
        Registarmonitor(infoMonitor);
        actulizarEstadoMoni();
        setIsModalRegistrar(false);
    }

    return (
        <Modal
            show={isModalRegistar}
            OnHide={() => setIsModalRegistrar(false)}
        >
            <Modal.Header>
                <Modal.Title>Registro de monitores</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <Form.Group controlId="form-group-id">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Nombres" id="nombre" />
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Apellidos" id="apellido" />
                        </Form.Group>
                        <Form.Group controlId="form-group-id">
                            <Form.Label>Programa academico</Form.Label>
                            <Form.Control type="text" placeholder="Carrera" id="degree" />
                            <Form.Label>Semestre</Form.Label>
                            <Form.Control type="number" placeholder="semestre" id="semester" />
                        </Form.Group>
                        <Form.Group controlId="form-group-id">
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control type="number" placeholder="N° de cedula" id="cedula" />
                            <Form.Label>informacion de contacto</Form.Label>
                            <Form.Control type="text" placeholder="Contacto" id="contact" />
                            <Form.Text className="text-muted">
                                Ya sea tu numero de telefono, correo electronico o red social favorita
                            </Form.Text>
                        </Form.Group>
                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => setIsModalRegistrar(false)}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={CrearMonitorModal}>
                    Registrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MonitoresForm