"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  contractorDirectoryTableHeader,
  contractorBodyData,
} from "@/developmentContext/contractorDirectory";
import HeadingSection from "@/components/organisms/HeadingSection";
import PopOver from "@/components/molecules/PopOver";
import { popoverOptions } from "@/developmentContext/dropDownOption";
import AddorEditContractorModal from "@/components/organisms/Modals/AddorEditContractor";
import classes from "./ContractorDirectoryTemplate.module.css";

const ContractorDirectoryTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(contractorBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);

  const [modalShow, setModalShow] = useState(false);

  const onClickPopover = (label, rowItem) => {
    console.log("Popover clicked:", label, rowItem);
    // Handle popover actions here
    if (label === "Edit") {
      setModalShow(true);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} >
          <HeadingSection
            heading="Contractor Directory"
            search={true}
            filter={true}
            button={true}
            buttonText="Add Contractor"
            onClick={() => setModalShow(true)}
            className={classes.headingSection}
          />
        </Col>
        <Col lg={12} >
          <Table
            tableHeader={contractorDirectoryTableHeader}
            data={data}
            loading={loading}
            noDataText={"No Data Found"}
            hasPagination={true}
            props={{
              totalRecords: totalRecords,
              onPageChange: (pg) => {
                setPage(pg);
                console.log(pg);
                setData(contractorBodyData);
              },
              currentPage: page,
            }}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = data[rowIndex];

              if (renderValue) {
                return renderValue(item, rowItem);
              }

              if (key == "action") {
                return (
                    <PopOver
                      popover={popoverOptions}
                      onClick={(label) => {
                        onClickPopover(label, rowItem);
                      }}
                    />
                );
              }
              return item || "";
            }}
          />
        </Col>
      </Row>
      <AddorEditContractorModal
        show={modalShow}
        setShow={setModalShow}
        loading={loading}
      />
    </Container>
    
  );
};

export default ContractorDirectoryTemplate;
