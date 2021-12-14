import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Box from "@mui/material/Box";

const BottomNavigationView = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
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
