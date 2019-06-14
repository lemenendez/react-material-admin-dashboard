import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core"
// import { Button } from '../../../../components/Wrappers'

import { Button } from './../../../components/Wrappers'

const states = {
  linked: "success",
  pending: "warning",
  notlinked: "secondary"
};

function handleButtonClick(e, target, status) {
  e.preventDefault()
  
  if(status && states[status] && states[status] =='success') {
    alert('This account is already connected')
  }
  else if(status && states[status] && states[status] =='warning') {
    alert('This account is pending for permissions')
  }
  else if(status && states[status] && states[status] =='secondary') {
   let response = window.confirm('do you wanto to link this ad account to aly?');
   
  }
}

const TableComponent = ({ data }) => {
  const keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key
  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, accountid, status, date }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{accountid}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>
              <Button
                color={states[status.toLowerCase()]}
                size="medium"
                className="px-2"
                variant="contained"
                onClick={ (e)=> { handleButtonClick(e, id, status)}}
              >
                {status}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
