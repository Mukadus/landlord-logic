import useMobileViewHook from "@/resources/hooks/useMobileViewHook";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
 
export default function ToolTip({ data, children, placement }) {
  const [open, setOpen] = useState(false);

  const { isMobile } = useMobileViewHook(576);

  const tooltipRef = useRef(null);
 
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[2],
      fontSize: isMobile ? "10px" : "13px",
      lineHeight: 1.8,
      padding: isMobile ? "6px 10px" : "8px 12px",
      whiteSpace: "pre-line",
      fontFamily: "var(--poppins)",
      maxWidth: isMobile && "150px",
    },
  }));
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
 
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);
 
  const handleTooltipClose = () => {
    setOpen(false);
  };
 
  const handleTooltipOpen = () => {
    setOpen(true);
  };
 
  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
 
 
  return (
    <LightTooltip
      title={data}
      placement={placement}
      open={open}
      onClose={handleTooltipClose}
      onOpen={handleTooltipOpen}
      disableHoverListener={false}
      disableFocusListener={false}
      disableTouchListener={false}
    >
      <span
        ref={tooltipRef}
        onClick={handleClick}
        style={{ cursor: "pointer", fontSize: isMobile ? "12px" : "13px" }}
      >
        {children}
      </span>
    </LightTooltip>
  );
}