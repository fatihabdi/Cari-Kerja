import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
} from "@chakra-ui/react";

const TableKerja = () => {
  return (
    <div className="mt-5 bg-white border rounded shadow-md lg:ml-7">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nama Perusahaan</Th>
              <Th>Step</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>PT Multi Instrumentasi</Td>
              <Td>Screening CV</Td>
              <Td>
                <Badge colorScheme="green">Success</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>PT Putra Tambang</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="orange">On Going</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>CV. Singgasana Benderang Abadi</Td>
              <Td>Screening CV</Td>
              <Td>
                <Badge colorScheme="red">Failed</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Kementerian Keuangan</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="orange">On going</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>PT Pertamina</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="orange">On Going</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Yayasan Achmad Zaky</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="red">Failed</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>PT Orang Tua</Td>
              <Td>Screening CV</Td>
              <Td>
                <Badge colorScheme="green">Success</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>CV Jaya Abadi</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="red">Failed</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Tokopedia</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="green">Success</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Gojek</Td>
              <Td>Interview</Td>
              <Td>
                <Badge colorScheme="red">Failed</Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableKerja;
