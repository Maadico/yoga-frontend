import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import axios from "axios";
import AdminLayout from "../../../components/layout/AdminLayout";

function AddCourse() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    time: "",
    link: "",
    visible: false,
  });
  const [originalFormData, setOriginalFormData] = useState({});

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/get-course`
      );
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/v1/course/add-course`,
        formData
      );
      setShowAddModal(false);
      fetchCourses();
    } catch (error) {
      console.error("Failed to add course:", error);
    }
  };

  const handleEditCourse = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/edit-course/${selectedCourse._id}`,
        formData
      );
      setShowEditModal(false);
      fetchCourses();
    } catch (error) {
      console.error("Failed to edit course:", error);
    }
  };

  const handleDeleteCourse = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/course/delete-course/${selectedCourse._id}`
      );
      setShowDeleteModal(false);
      fetchCourses();
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  const handleEditModalShow = (course) => {
    setSelectedCourse(course);
    setFormData(course);
    setOriginalFormData(course);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setSelectedCourse({});
    setFormData({});
    setShowEditModal(false);
    fetchCourses();
    window.location.reload();
  };

  return (
    <div>
      <AdminLayout>
        <br />
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formLink">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter link"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formVisible">
                <Form.Check
                  type="checkbox"
                  label="Visible"
                  checked={formData.visible}
                  onChange={(e) =>
                    setFormData({ ...formData, visible: e.target.checked })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShowAddModal(false);
                window.location.reload();
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddCourse}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Time</th>
              <th>Link</th>
              <th>Visible</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.price}</td>
                <td>{course.time}</td>
                <td>{course.link}</td>
                <td>{course.visible ? "✔" : "-"}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleEditModalShow(course)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setSelectedCourse(course);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showEditModal} onHide={handleEditModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  value={formData.price || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter time"
                  value={formData.time || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formLink">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter link"
                  value={formData.link || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formVisible">
                <Form.Check
                  type="checkbox"
                  label="Visible"
                  checked={formData.visible}
                  onChange={(e) =>
                    setFormData({ ...formData, visible: e.target.checked })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleEditCourse}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteCourse}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          Add Course
        </Button>
      </AdminLayout>
    </div>
  );
}

export default AddCourse;
