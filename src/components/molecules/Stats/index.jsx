import React from "react";
import classes from "./Stats.module.css";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function StatsCard({ data }) {
  const router = useRouter();
  return (
    <div className={classes.statsCard} onClick={() => router.push(data.route)}>
      <div className={classes.statsCardHeader}>
        <div className={classes.statsLeftCol}>
          <div className={classes.iconDiv}>
            <div className={classes.img}>
              <Image src={data.img} alt={data.title} fill priority />
            </div>
          </div>
          <p className={clsx(classes.title, "fs18 fw500")}>{data.title}</p>
        </div>
        <div className={classes.statsRightCol}>
          <p className={classes.value}>last week</p>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.valueDiv}>
          <p className={clsx(classes.value, "fs32 fw500")}>{data.value}</p>
          {data?.subTitle && (
            <p className={clsx("fs14 fw500", classes.subTitle)}>
              {data?.subTitle}
            </p>
          )}
        </div>
        <Button
          label={"Details"}
          variant={"outlined"}
          className={classes.detailsBtn}
          leftIcon={<LuSquareArrowOutUpRight />}
        />
      </div>
    </div>
  );
}
