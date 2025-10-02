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
import { useRouter } from "next/navigation";

const ContractorDirectoryTemplate = () => {
  // ROUTER
  const router = useRouter();

  // STATE
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(contractorBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);

  // MODAL
  const [modalShow, setModalShow] = useState(false);

  // HANDLE POPOVER
  const onClickPopover = (label, rowItem) => {
    if (label === "viewDetails") {
      router.push(`/contractor-profiles/detail`);
    }
  };

  const handleSubmit = (values) => {
    console.log("Submit data:", values);
    setLoading("submitData");

    setModalShow(false);
  };

  const handleSubmit = (values) => {
    console.log("Submit data:", values);
    setLoading("submitData");

    setModalShow(false);
  };

  // JSX
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
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
        <Col lg={12}>
          <Table
            tableHeader={contractorDirectoryTableHeader}
            data={data}
            loading={loading}
            noDataText={"No Data Found"}
            hasPagination={true}
            totalRecords={totalRecords}
            onPageChange={(pg) => {
              setPage(pg);
              setData(contractorBodyData);
            }}
            currentPage={page}
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
        loading={loading === "submitData"}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default ContractorDirectoryTemplate;
