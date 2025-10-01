"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import InformationSection from "@/components/molecules/InformationSection";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import ComplaintsSection from "@/components/organisms/ComplaintsSection";
import PropertyDetailSection from "@/components/organisms/PropertyDetailSection";
import TenantSection from "@/components/organisms/TenantSection";
import UserDetailSection from "@/components/organisms/UserDetailSection";
import { propertyTabs } from "@/developmentContext/dropDownOption";
import { tenantProfileDetailData } from "@/developmentContext/tenantProfile";
import useAxios from "@/interceptor/axios-functions";
import { getFormattedPrice } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import classes from "./TenantDetailTemplate.module.css";

export default function TenantDetailTemplate({ slug = "" }) {
  // HOOKS
  const { Get } = useAxios();

  // STATE
  const [data, setData] = useState(tenantProfileDetailData ?? null);

  const [loading, setLoading] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedTab, setSelectedTab] = useState(propertyTabs[0]?.value);
  // API FUNCTION
  const getData = async () => {
    setLoading("getData");
    const { response } = await Get({ route: `tenant-profiles/${slug}` });
    if (response) {
      setData(response?.data?.data);
    }
    setLoading("");
  };

  // useEffect
  // useEffect(() => {
  // if(slug) {
  //   getData();
  // }
  // }, [slug]);

  // user stats
  const userStats = [
    {
      value: "Spending last 12 months",
      title: getFormattedPrice(data?.user?.lastMonthSpending),
    },
    {
      value: "Total Spending",
      title: getFormattedPrice(data?.user?.totalSpending),
    },
    {
      value: "Subscription",
      title: data?.user?.subscription?.package?.name,
    },
  ];

  if (loading === "getData") {
    return <LoadingSkeleton height={"500px"} width={"100%"} />;
  }

  const renderTabs = () => {
    if (selectedTab === "overview") {
      return <InformationSection data={data?.properties} />;
    }
    if (selectedTab === "tenants") {
      return <TenantSection data={data} />;
    }
    if (selectedTab === "complaints") {
      return <ComplaintsSection data={data} />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Tenant Profiles"
            title2="Tenant Details"
            showStatusButton={true}
            label={`${
              data?.user?.status === "active" ? "Disable" : "Enable"
            } Tenant`}
            leftIcon={
              data?.user?.status === "active" ? (
                <CiCircleMinus className={classes.statusIcon} />
              ) : (
                <FaRegCircleCheck
                  color="var(--green)"
                  className={classes.statusIcon}
                />
              )
            }
            handleStatusButton={() => {}}
          />
        </Col>
        <Col lg={12}>
          <UserDetailSection
            data={data?.user}
            text={"Member Since"}
            stats={userStats}
          />
        </Col>

        <Col lg={12} className={classes.propertyDetailSection}>
          <PropertyDetailSection
            data={data?.properties}
            filter={filter}
            showFilter={true}
            tabsData={propertyTabs}
            selected={selectedTab}
            setSelected={setSelectedTab}
            setFilter={setFilter}
            renderTabs={renderTabs}
          />
        </Col>
      </Row>
    </Container>
  );
}
