"use client";
import Button from "@/components/atoms/Button";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import PopOver from "@/components/molecules/PopOver";
import RevenueChart from "@/components/molecules/RevenueChart";
import StatsCard from "@/components/molecules/Stats";
import SubscriptionCard from "@/components/molecules/SubscriptionCard";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  dashboardData,
  registrationTableHeader,
  statsData,
} from "@/developmentContext/dashboard";
import { popoverOptions } from "@/developmentContext/dropDownOption";
import useAxios from "@/interceptor/axios-functions";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./DashboardTemplate.module.css";
import { useRouter } from "next/navigation";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";

export default function DashboardTemplate() {
  // HOOKS
  const { Get } = useAxios();
  const router = useRouter();
  // STATE
  const [data, setData] = useState(dashboardData);
  const [loading, setLoading] = useState("");
  const [year, setYear] = useState("");

  // API FUNCTION
  const getData = async () => {
    setLoading("getData");

    const { response } = await Get({ route: "dashboard" });
    if (response) {
      setData(response?.data);
    }
    setLoading("");
  };

  // useEffect

  // useEffect(() => {
  //   getData();
  // }, []);

   // Handle popover click
   const onClickPopover = (value, rowItem) => {
    if (value === "viewDetails") {
      router.push(`/landlord-insights/detail`);
    }
  };

  return (
    <Container fluid>
      <Row className={clsx(classes.dashboardRow)}>
        <Col md={12}>
          <Row>
            {loading === "getData"
              ? Array.from({ length: 3 }).map((_, index) => (
                  <Col md={4} key={index}>
                    <LoadingSkeleton width="100%" height="100%" />
                  </Col>
                ))
              : statsData(data).map((item, index) => (
                  <Col md={4} key={index}>
                    <StatsCard data={item} />
                  </Col>
                ))}
          </Row>
        </Col>
        <Col  xxl={8} xl={7} md={12}>
          <RevenueChart
            data={data?.revenueGraph}
            year={year}
            setYear={setYear}
          />
        </Col>
        <Col xxl={4} xl={5} md={12}>
          <div className={classes.subscriptionDiv}>
            <div className={classes.subscriptionHeader}>
              <div className={classes.iconDiv}>
                <div className={classes.img}>
                  <Image
                    src={"/svgs/dollar-square.svg"}
                    alt="subscription"
                    fill
                    priority
                  />
                </div>
              </div>
              <p className={clsx(classes.title, "fw500 fs16")}>
                Recent Subscriptions
              </p>
            </div>
            <Row className={classes.subscriptionRow}>
              {data?.transactions?.length > 0 ? (
                data?.transactions?.map((item, index) => (
                  <Col md={12} key={index}>
                    <SubscriptionCard data={item} />
                  </Col>
                ))
              ) : (
                <Col md={12}>
                  <NoDataFound title="No recent subscriptions found" size="small" />
                </Col>
              )}
            </Row>
            <Button
              label={"View all Subscriptions"}
              variant={"outlined"}
              fullWidth
              onClick={() => router.push("/subscription-management")}
            />
          </div>
        </Col>
        <Col md={12}>
          <div className={classes.registrationDiv}>
            <h6 className={clsx(classes.heading, "fw500 fs20")}>Recent Registrations</h6>
            <Button label={"View all"} variant={"outlined"} onClick={() => router.push("/landlord-insights")} />
          </div>
        </Col>
        <Col md={12}>
          <div className={classes.tableWrapper}>
            <ResponsiveTable
              tableHeader={registrationTableHeader}
              data={data?.registrations}
              loading={loading === "getData"}
              hasPagination={false}
              renderItem={({ item, key, rowIndex, renderValue }) => {
                const rowItem = data?.registrations[rowIndex];

                if (renderValue) {
                  return renderValue(item, rowItem);
                }

                if (key == "action") {
                  return (
                    <div className={classes.actionButtons}>
                      <PopOver
                        popover={popoverOptions}
                        onClick={(label) => {
                          onClickPopover(label, rowItem);
                        }}
                      />
                    </div>
                  );
                }
                return item || "";
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
