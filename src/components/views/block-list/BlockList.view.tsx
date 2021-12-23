import { selectList, selectTime } from "_/slices/blocks/blocks.slice";
import { useSelector } from "react-redux";
import BlockListItemView from "../block-list-item/BlockListItem.view";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { AppBarShimView } from "../app-bar/AppBar.view";
import { BottomNavigationShimView } from "../bottom-navigation/BottomNavigation.view";
import { Helmet } from "react-helmet-async";
import { APP_NAME } from "_/__config";

const BlockListView = () => {
  const time = useSelector(selectTime);
  const list = useSelector(selectList);

  if (!time) {
    return (
      <>
        <AppBarShimView />
        <Container>
          <Typography>Loading...</Typography>
        </Container>
        <BottomNavigationShimView />
      </>
    );
  }

  if (!!time && !list.length) {
    return (
      <>
        <AppBarShimView />
        <Container>
          <Typography>No items yet</Typography>
        </Container>
        <BottomNavigationShimView />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{APP_NAME} - Blocks</title>
      </Helmet>
      <AppBarShimView />
      <Container disableGutters>
        {list.map((item) => (
          <BlockListItemView item={item} key={item.hash} />
        ))}
        <BottomNavigationShimView />
      </Container>
    </>
  );
};

export default BlockListView;
