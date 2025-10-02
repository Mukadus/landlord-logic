"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import InformationSection from "@/components/molecules/InformationSection";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import PropertyDetailSection from "@/components/organisms/PropertyDetailSection";
import UserDetailSection from "@/components/organisms/UserDetailSection";
import {
  contractorDirectoryTabs,
  tenantProfileTabs,
} from "@/developmentContext/dropDownOption";

import { tenantProfileDetailData } from "@/developmentContext/tenantProfile";
import useAxios from "@/interceptor/axios-functions";
import { getFormattedPrice } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import classes from "./ContractorDetailTemplate.module.css";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import ReviewCard from "@/components/organisms/ReviewCard";
import JobHistorySection from "@/components/molecules/JobHistorySection";
import {
  contractorDirectoryDetailData,
  overViewData,
} from "@/developmentContext/contractorDirectory";
import PropertyCard from "@/components/organisms/PropertyCard";

export default function ContractorDetailTemplate({ slug = "" }) {
  // HOOKS
  const { Get } = useAxios();

  // STATE
  const [data, setData] = useState(contractorDirectoryDetailData ?? null);
  const [loading, setLoading] = useState("");
  const [selectedTab, setSelectedTab] = useState(
    contractorDirectoryTabs[0]?.value
  );

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
          data={overViewData(data?.properties, data?.user)}
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
      return <ReviewCard data={data?.reviews} />;
    }
    if (selectedTab === "propertiesWorkedOn") {
      return data?.previousProperties?.length > 0 ? (
        <div className={classes.propertyCardGrid}>
          {data?.previousProperties?.map((property, index) => (
            <div className={classes.propertyCardGridItem}>
              <PropertyCard key={index} data={property} />
            </div>
          ))}
        </div>
      ) : (
        <NoDataFound title="No properties found" />
      );
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Contractor Directory"
            title2="Contractor Details"
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
            showPortfolio={true}
          />
        </Col>

        <Col lg={12} className={classes.propertyDetailSection}>
          <PropertyDetailSection
            data={data?.properties}
            tabsData={contractorDirectoryTabs}
            selected={selectedTab}
            setSelected={setSelectedTab}
            renderTabs={renderTabs}
          />
        </Col>
      </Row>
    </Container>
  );
}
