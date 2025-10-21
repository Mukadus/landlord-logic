"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import InformationSection from "@/components/molecules/InformationSection";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import PropertyDetailSection from "@/components/organisms/PropertyDetailSection";
import UserDetailSection from "@/components/organisms/UserDetailSection";
import { tenantProfileTabs } from "@/developmentContext/dropDownOption";

import {
  overViewData,
  tenantProfileDetailData,
} from "@/developmentContext/tenantProfile";
import useAxios from "@/interceptor/axios-functions";
import { getFormattedPrice } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import classes from "./TenantDetailTemplate.module.css";
import ReviewCard from "@/components/organisms/ReviewCard";
import JobHistorySection from "@/components/molecules/JobHistorySection";
import AreYouSureModal from "@/components/organisms/Modals/AreYouSureModal";
import RenderToast from "@/components/atoms/RenderToast";

export default function TenantDetailTemplate({ slug = "" }) {
  // HOOKS
  const { Get, Patch } = useAxios();

  // STATE
  const [data, setData] = useState(tenantProfileDetailData ?? null);
  const [loading, setLoading] = useState("");
  const [selectedTab, setSelectedTab] = useState(tenantProfileTabs[0]?.value);
  const [showModal, setShowModal] = useState(false);

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
      value: "Total Jobs",
      title: data?.user?.totalJobs,
    },
  ];

  if (loading === "getData") {
    return <LoadingSkeleton height={"500px"} width={"100%"} />;
  }

  const renderTabs = () => {
    if (selectedTab === "overview") {
      return (
        <InformationSection
          data={overViewData(data?.properties)}
          header={true}
        />
      );
    }
    if (selectedTab === "allJobsHistory") {
      return data?.properties?.jobRequests?.length > 0 ? (
        <JobHistorySection jobRequests={data?.properties?.jobRequests} />
      ) : (
        <NoDataFound title="No job requests found" />
      );
    }
    if (selectedTab === "ratingAndReviews") {
      return <ReviewCard data={data?.reviews} user={data?.user} />;
    }
  };

  // HANDLE DISABLE TENANT
  const handleDisableTenant = async () => {
    setLoading("disableTenant");
    const { response } = await Patch({ route: `tenant-profiles/${slug}`, data: { status: "inactive" } });
    if (response) {
      // RenderToast({
      //   message: "Tenant disabled successfully",
      //   type: "success",
      // });
      setShowModal(false);
      // getData();
    }
    setLoading("");
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Tenant Profiles"
            title2="Tenant Details"
            showStatusButton={true}
            label={`${data?.user?.status === "active" ? "Disable" : "Enable"
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

        <Col lg={12} className={classes.propertyDetailSection}>
          <PropertyDetailSection
            data={data?.properties}
            tabsData={tenantProfileTabs}
            selected={selectedTab}
            setSelected={setSelectedTab}
            renderTabs={renderTabs}
          />
        </Col>
      </Row>
      <AreYouSureModal
        show={showModal}
        setShow={setShowModal}
        title="Are You Sure You Want to Disable This Tenant?"
        subTitle="This action cannot be undone. Please confirm to proceed."
        onClick={() => {
          handleDisableTenant();
        }}
        showCloseIcon={true}
        isLoading={false}
        type="warning"
      />
    </Container>
  );
}
