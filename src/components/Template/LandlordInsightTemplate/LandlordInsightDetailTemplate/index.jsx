"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import PropertyDetailSection from "@/components/organisms/PropertyDetailSection";
import TotalProperties from "@/components/organisms/TotalProperties";
import UserDetailSection from "@/components/organisms/UserDetailSection";
import { landlordInsightDetailData } from "@/developmentContext/landlordInsight";
import useAxios from "@/interceptor/axios-functions";
import { getFormattedPrice } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import classes from "./LandlordInsightDetailTemplate.module.css";
import { propertyTabs } from "@/developmentContext/dropDownOption";

export default function LandlordInsightDetailTemplate({ slug = "" }) {
  // HOOKS
  const { Get } = useAxios();

  // STATE
  const [data, setData] = useState(landlordInsightDetailData ?? null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedTab, setSelectedTab] = useState(propertyTabs[0]?.value);
  // API FUNCTION
  const getData = async () => {
    setLoading("getData");
    const { response } = await Get({ route: `landlord-insights/${slug}` });
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
      return "Hello";
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Landlord Insights"
            title2="Landlord Details"
            showStatusButton={true}
            label={`${
              data?.user?.status === "active" ? "Disable" : "Enable"
            } Landlord`}
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
        <Col lg={4}>
          <TotalProperties
            data={data?.properties}
            setSelectedProperty={setSelectedProperty}
          />
        </Col>
        <Col lg={8} className={classes.propertyDetailSection}>
          {selectedProperty ? (
            <PropertyDetailSection
              data={selectedProperty}
              filter={filter}
              showFilter={true}
              tabsData={propertyTabs}
              selected={selectedTab}
              setSelected={setSelectedTab}
              setFilter={setFilter}
              renderTabs={renderTabs}
            />
          ) : (
            <NoDataFound
              title="No property selected"
              subtitle="Select a property to view details"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
