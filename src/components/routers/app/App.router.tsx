import { useRoutes } from "react-router-dom";
import BlockListView from "_views/block-list/BlockList.view";
import Typography from "@mui/material/Typography";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <BlockListView /> },
    {
      path: "transactions",
      element: <Typography variant="h1">Transactions</Typography>,
    },
    { path: "events", element: <Typography variant="h1">Elements</Typography> },
  ]);
  return routes;
};

export default AppRouter;
