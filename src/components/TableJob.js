import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const TableJob = () => {
  const { handleFunction } = useContext(GlobalContext);
  const { handleDelete } = handleFunction;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-5 bg-white border rounded shadow-md lg:ml-10">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Nama Ticket</Th>
              <Th>Tanggal</Th>
              <Th>Lokasi</Th>
              <Th>Harga Ticket</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} value={item.id}>
                <Td>
                  <img
                    src={item.company_image_url}
                    className="w-14"
                    alt="foto"
                  />
                </Td>
                <Td>{item.company_name}</Td>
                <Td>{item.title}</Td>
                <Td>{item.company_city}</Td>
                <Td>{item.job_tenure}</Td>
                <Td>
                  {" "}
                  <Link to={`/dashboard/list-ticket/edit/${item.id}`}>
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleDelete(e)}
                    value={item.id}
                    className="px-4 py-2 ml-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableJob;
