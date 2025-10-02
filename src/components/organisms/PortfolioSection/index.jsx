import Button from "@/components/atoms/Button";
import clsx from "clsx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import classes from "./PortfolioSection.module.css";

export default function PortfolioSection({ data }) {
  return (
    <div className={classes.mainDiv}>
      <h3 className={clsx(classes.title, "fw600 fs16")}>Portfolio</h3>
      <div className={classes.portfolioContainer}>
        {data?.map((item, index) => (
          <div key={index} className={classes.portfolioItem}>
            <div className={classes.portfolioItemImage}>
              <IoDocumentTextOutline className={classes.icon} />
            </div>
            <div className={classes.subDiv}>
              <p className={clsx(classes.title, "fs16 fw500")}>
                {item?.documentName}
              </p>
              <div className={classes.sizeDiv}>
                <p className={clsx(classes.size, "fs14 fw400")}>{item?.size}</p>
                <Button
                  label={"Download"}
                  variant={"transparent"}
                  leftIcon={
                    <LiaDownloadSolid className={classes.downloadIcon} />
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
