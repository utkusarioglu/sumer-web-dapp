import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { selectAppDrawerOpen, setAppDrawerOpen } from "_/slices/app/app.slice";
// import WasmView from "_views/wasm/Wasm.view";
import ColorModeSwitchView from "_views/color-mode-switch/ColorModeSwitch.view";

function AppDrawerView() {
  const state = useSelector(selectAppDrawerOpen);

  return (
    <Drawer anchor="left" open={state} onClose={() => setAppDrawerOpen(false)}>
      <Box sx={{ width: 250 }}>
        {/* <Divider /> */}
        {/* <WasmView /> */}
        <Divider />
        <Container>
          <ColorModeSwitchView />
        </Container>
      </Box>
    </Drawer>
  );
}

export default AppDrawerView;
