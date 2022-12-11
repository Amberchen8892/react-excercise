import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table'

function TonyTableUser({ tableHeader = [], dataTableRow = [], renderRow }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {tableHeader.length > 0 && tableHeader.map((header, headerIndex) => (
              <th key={headerIndex} style={{ textAlign: header.align }}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTableRow.length > 0 && dataTableRow.map((row, rowIndex) => (
            <tr  key={rowIndex}>
              {renderRow(row)}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TonyTableUser;
