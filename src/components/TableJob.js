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
      .get(process.env.REACT_APP_API_URL + "/concerts")
      .then((res) => {
        setData(res.data.datas);
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
              <Th>Nama Ticket</Th>
              <Th>Tanggal</Th>
              <Th>Type</Th>
              <Th>Harga Ticket</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} value={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.startDate} - {item.endDate}</Td>
                <Td className="uppercase">{item.type}</Td>
                <Td>Rp. {item.price}</Td>
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
