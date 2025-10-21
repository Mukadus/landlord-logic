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
import { actionPopoverOptions } from "@/developmentContext/dropDownOption";
import AddorEditContractorModal from "@/components/organisms/Modals/AddorEditContractor";
import classes from "./ContractorDirectoryTemplate.module.css";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axios-functions";
import RenderToast from "@/components/atoms/RenderToast";

const ContractorDirectoryTemplate = () => {

  const { Get, Put, Post, Patch } = useAxios();

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
    else if (label === "edit") {
      // router.push(`/contractor-profiles/edit/${rowItem?.id}`)
      setModalShow(true);
      handleSubmit(rowItem, rowItem?.id);
    }
    else if (label === "delete") {
      router.push(`/contractor-profiles/delete/${rowItem?.id}`);
    }
  };

  // API FUNCTION
  const getData = async ({
    _page = page,
    _search = search,
    _filter = filter,
  }) => {
    setLoading("getData");

    const params = {
      page: _page,
      limit: 10,
      search: _search,
      filter: _filter,
    };

    const queryParams = new URLSearchParams(params).toString();

    const { response } = await Get({
      route: `contractors?${queryParams}`,
    });

    if (response) {
      setData(response?.data?.data);
      setTotalRecords(response?.data?.totalRecords);
      setPage(_page);
    }
    setLoading("");
  };

  // useEffect
  // useEffect(() => {
  //   getData();
  // }, []);


  const handleSubmit = async (values, slug = "") => {
    setLoading("submitData");

    const methodType = slug ? Put : Post;

    const { response } = await methodType({
      route: `contractors${slug ? `/${slug}` : ""}`,
      data: values,
    });
    if (response) {
      setModalShow(false);
      getData();
      RenderToast({
        message: `Contractor ${slug ? "updated" : "added"} successfully`,
        type: "success",
      });
    }
    setLoading("");
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
            searchValue={search}
            setSearchValue={setSearch}
            filters={filter}
            setFilter={setFilter}
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
                    popover={actionPopoverOptions}
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
