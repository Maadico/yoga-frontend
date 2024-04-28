import React from "react";
import {
  Button,
  // DropdownButton, Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <ButtonGroup>
      {/* <DropdownButton as={ButtonGroup} title="Course" id="bg-nested-dropdown">
        <Dropdown.Item as={Link} to="/dashboard/admin/add-course">
          Add Course
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/dashboard/admin/edit-course">
          Edit Course
        </Dropdown.Item>
      </DropdownButton> */}
      <Button as={Link} to="/dashboard/admin/course">
        Course
      </Button>
      <Button as={Link} to="/dashboard/admin/contact">
        Contact
      </Button>
      <Button as={Link} to="/dashboard/admin/view-users">
        Users
      </Button>
      <Button as={Link} to="/dashboard/admin/view-subscriptions">
        Subscriptions
      </Button>
    </ButtonGroup>
  );
}

export default AdminNav;
