import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";
import axios from "axios";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData && authData.success) {
      setUserData(authData.user);
      setName(authData.user.name);
      setPhone(authData.user.phone);
    }
  }, []);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/profile`,
        {
          name,
          phone,
        }
      );
      const data = response.data;
      if (data.success) {
        setEditing(false);
        // Update user data in localStorage
        const authData = JSON.parse(localStorage.getItem("auth"));
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...authData,
            user: {
              ...authData.user,
              name,
              phone,
            },
          })
        );
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <section>
      <Header />
      <Container className="py-5">
        <Row>
          <Col lg="4">
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                {userData && (
                  <>
                    <p className="text-muted mb-1">
                      {userData.role === 0 ? "User" : "Admin"}
                    </p>
                    <p className="text-muted mb-4">{name}</p>
                    {editing ? (
                      <Button onClick={handleSubmit}>Submit</Button>
                    ) : (
                      <Button onClick={handleEditProfile}>Edit Profile</Button>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8">
            {userData && (
              <Card className="mb-4">
                <Card.Body>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Full Name
                      </Form.Label>
                      <Col sm="9">
                        {editing ? (
                          <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        ) : (
                          <Card.Text className="text-muted">{name}</Card.Text>
                        )}
                      </Col>
                    </Form.Group>
                    <hr />
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Email
                      </Form.Label>
                      <Col sm="9">
                        <Card.Text className="text-muted">
                          {userData.email}
                        </Card.Text>
                      </Col>
                    </Form.Group>
                    <hr />
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Phone
                      </Form.Label>
                      <Col sm="9">
                        {editing ? (
                          <Form.Control
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        ) : (
                          <Card.Text className="text-muted">{phone}</Card.Text>
                        )}
                      </Col>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            )}

            {/* Progress Cards */}
            {/* You can follow the similar structure for the progress cards as well */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
