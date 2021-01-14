import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Sort(props) {
    return (
        <div>
            <Dropdown className="mb-5">
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Sort by...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.name}>Last name</Dropdown.Item>
                    <Dropdown.Item onClick={props.state}>State</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Sort;