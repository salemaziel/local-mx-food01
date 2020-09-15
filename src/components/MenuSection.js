import React from "react";
import Section2 from "./Section2";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Table from "react-bootstrap/Table";

function MenuSection(props) {
  return (
    <Section2
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Table striped={true} bordered={true}>
          {/*<thead className="text-white text-center">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>*/}
          <tbody className="text-white justify-content-center text-center">
            <tr>
              <td>Menu Item</td>
              <td>Menu Item</td>
              <td>Menu Item</td>
            </tr>
            <tr>
              <td>Menu Item</td>
              <td>Menu Item</td>
              <td>Menu Item</td>
            </tr>
            <tr>
              <td>Menu Item</td>
              <td>Menu Item</td>
              <td>Menu Item</td>
            </tr>
            <tr>
              <td>Menu Item</td>
              <td>Menu Item</td>
              <td>Menu Item</td>
            </tr>
            <tr>
              <td>Menu Item</td>
              <td>Menu Item</td>
              <td>Menu Item</td>
            </tr>
            <tr>
              <td>Menu Item</td>
              <td>Menu Item</td>
              <td>Menu Item</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Section2>
  );
}

export default MenuSection;
