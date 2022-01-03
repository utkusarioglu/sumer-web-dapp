import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Box from "@mui/material/Box";
import { indexToNavigate, pathnameToIndex } from "_utils/location.utils";

type NavOnClick = (path: number) => void;

const BottomNavigationView = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const index = pathnameToIndex(location.pathname);
    if (index == -1) {
      return;
    }
    setValue(index);
  }, [location.pathname]);

  const navOnClick: NavOnClick = (index) => {
    const path = indexToNavigate(index);
    navigate(path);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          navOnClick(newValue);
        }}
      >
        <BottomNavigationAction label="Blocks" icon={<Inventory2Icon />} />
        <BottomNavigationAction
          label="Transactions"
          icon={<ReceiptLongIcon />}
        />
        <BottomNavigationAction label="Events" icon={<ReceiptIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export const BottomNavigationShimView = () => <Box sx={{ height: 80 }} />;

export default BottomNavigationView;
