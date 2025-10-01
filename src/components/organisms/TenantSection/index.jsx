"use client";
import Image from "next/image";
import classes from "./TenantSection.module.css";
import clsx from "clsx";

export default function TenantSection({ data = {} }) {
  const tenant = data?.tenant || {};
  const phone =
    tenant?.callingCode && tenant?.phone
      ? `${tenant.callingCode} ${tenant.phone}`
      : tenant?.phone || "-";

  // Put tenant details into an array
  const details = [
    { label: "Name", value: tenant?.fullName || "-" },
    { label: "Email", value: tenant?.email || "-" },
    { label: "Phone", value: phone },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={clsx(classes.title, "fw600 fs16")}>Tenant Details</h3>
      </div>

      <div className={classes.card}>
        <div className={classes.avatarWrap}>
          <div className={classes.avatar}>
            <Image
              src={tenant?.photo || "/app-images/default-user.png"}
              alt={tenant?.fullName || "Tenant"}
              fill
            />
          </div>
        </div>

        <div className={classes.info}>
          {details.map(({ label, value }, idx) => (
            <div key={idx} className={classes.row}>
              <span className={clsx(classes.label, "fs12")}>{label}</span>
              <span
                className={clsx(
                  classes.value,
                  "fs14 fw500",
                  label !== "Phone" && "maxLine1" // only apply maxLine1 for Name & Email
                )}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
