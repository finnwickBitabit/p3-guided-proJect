import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "../index.css";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide}> 
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add to the Global Database</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>NAME::</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange} />
            </Form.Group>

            <Form.Group controlId="formSpecies">
              <Form.Label>SPECIES</Form.Label>
              <Form.Control
                name="species"
                value={form.species}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>AGE::</Form.Label>
              <Form.Control value={form.age} onChange={onChange} name="age" />
            </Form.Group>

            <Form.Group controlId="formImageUrl">
              <Form.Label className="form-label">UPLOAD A PHOTO::</Form.Label>
              <Form.Control
                className="form-control"
                value={form.imageUrl}
                onChange={onChange}
                name="imageUrl"
                placeholder="upload a photo"
              />
            </Form.Group>

            <Form.Group controlId="vaccinatedForm">
              <Form.Check
                type="checkbox"
                label="Vaccinated"
                name="vaccinated"
                checked={form.vaccinated}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button onClick={onSave} variant="primary">
            Save Animal
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
