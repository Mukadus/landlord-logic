"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import RevenueChart from "@/components/molecules/RevenueChart";
import StatsCard from "@/components/molecules/Stats";
import { dashboardData, statsData } from "@/developmentContext/dashboard";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./DashboardTemplate.module.css";
import SubscriptionCard from "@/components/molecules/SubscriptionCard";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function DashboardTemplate() {
  const [data, setData] = useState(dashboardData);
  const [loading, setLoading] = useState("");
  const [year, setYear] = useState("");

  return (
    <Container fluid>
      <Row className={classes.dashboardRow}>
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
        <Col md={8}>
          <RevenueChart
            data={data.revenueGraph}
            year={year}
            setYear={setYear}
          />
        </Col>
        <Col md={4}>
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
              {data?.transactions?.map((item, index) => (
                <Col md={12} key={index}>
                  <SubscriptionCard data={item} />
                </Col>
              ))}
            </Row>
            <Button
              label={"View all Subscriptions"}
              variant={"outlined"}
              fullWidth
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
