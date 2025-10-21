"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import PropertyDetailSection from "@/components/organisms/PropertyDetailSection";
import TotalProperties from "@/components/organisms/TotalProperties";
import UserDetailSection from "@/components/organisms/UserDetailSection";
import {
  landlordInsightDetailData,
  overViewData,
} from "@/developmentContext/landlordInsight";
import useAxios from "@/interceptor/axios-functions";
import { getFormattedPrice } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import classes from "./LandlordInsightDetailTemplate.module.css";
import { propertyTabs } from "@/developmentContext/dropDownOption";
import InformationSection from "@/components/molecules/InformationSection";
import TenantSection from "@/components/organisms/TenantSection";
import ComplaintsSection from "@/components/organisms/ComplaintsSection";
import AreYouSureModal from "@/components/organisms/Modals/AreYouSureModal";
import RenderToast from "@/components/atoms/RenderToast";

export default function LandlordInsightDetailTemplate({ slug = "" }) {
  // HOOKS
  const { Get, Patch } = useAxios();

  // STATE
  const [data, setData] = useState(landlordInsightDetailData ?? null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedTab, setSelectedTab] = useState(propertyTabs[0]?.value);
  const [showModal, setShowModal] = useState(false);
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
      return (
        <InformationSection
          data={overViewData(selectedProperty)}
          header={true}
        />
      );
    }
    if (selectedTab === "tenants") {
      return <TenantSection data={selectedProperty} />;
    }
    if (selectedTab === "complaints") {
      return <ComplaintsSection data={selectedProperty} />;
    }
  };

  // HANDLE DISABLE LANDLORD
  const handleDisableLandlord = async () => {
    setLoading("disableLandlord");
    const { response } = await Patch({ route: `landlord-insights/${slug}`, data: { status: "inactive" } });
    if (response) {
      RenderToast({
        message: "Landlord disabled successfully",
        type: "success",
      });
      setShowModal(false);
      getData();
    }
    setLoading("");
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
            handleStatusButton={() => {
              setShowModal(true);
            }}
          />
        </Col>
        <Col lg={12}>
          <UserDetailSection
            data={data?.user}
            text={"Member Since"}
            stats={userStats}
          />
        </Col>
        <Col xl={4} lg={5}>
          <TotalProperties
            selectedProperty={selectedProperty}
            data={data?.properties}
            setSelectedProperty={setSelectedProperty}
          />
        </Col>
        <Col xl={8} lg={7} className={classes.propertyDetailSection}>
          {selectedProperty ? (
            <PropertyDetailSection
              data={selectedProperty}
              tabsData={propertyTabs}
              selected={selectedTab}
              setSelected={setSelectedTab}
              header={true}
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
      <AreYouSureModal
        show={showModal}
        setShow={setShowModal}
        title="Are You Sure You Want to Disable This Landlord?"
        subTitle="This action cannot be undone. Please confirm to proceed."
        onClick={() => {
          handleDisableLandlord();
        }}
        showCloseIcon={true}
        isLoading={false}
        type="warning"
      />
    </Container>
  );
}
