import clsx from "clsx";
import classes from "./InformationSection.module.css";

export default function InformationSection({
  data,
  header = false,
  containerClass = "",
}) {
  return (
    <div className={clsx(classes.informationSection, containerClass)}>
      {header && (
        <div className={classes.headerDiv}>
          <p className={clsx(classes.title, "fs16 fw500")}>Information</p>
        </div>
      )}
      {Array.isArray(data) &&
        data?.map((item, index) => (
          <div key={index} className={clsx(classes.informationItem)}>
            {item?.type === "text" ? (
              <div className={classes.descriptionContainer}>
                <h3 className={clsx("fs18 fw600", classes.descriptionTitle)}>
                  {item?.label}
                </h3>
                <div className={classes.descriptionContent}>
                  {item?.value || "-"}
                </div>
              </div>
            ) : (
              <>
                <div className={classes.informationItem}>
                  {item?.icon && item?.icon}
                  <p className={clsx("fs14 fw500", classes.label)}>
                    {item?.label}
                  </p>
                </div>
                <div>
                  <p
                    className={clsx(
                      "fs14 fw500",
                      item?.value === "active" || item?.value === "completed"
                        ? classes.activeStatus
                        : item?.value === "inactive"
                          ? classes.inactiveStatus
                          : item?.value === "pending"
                            ? classes.pendingStatus
                            : item?.value === "ongoing"
                              ? classes.ongoingStatus
                              : "",
                      item?.type === "status" ? classes.statusValue : "",
                      classes.value
                    )}
                  >
                    {item?.value || "-"}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
