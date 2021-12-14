import AppBarView from "_views/app-bar/AppBar.view";
import BlockListView from "_views/block-list/BlockList.view";
import BottomNavigationView from "_views/bottom-navigation/BottomNavigation.view";

const AppLayout = () => {
  return (
    <>
      <AppBarView />
      <BlockListView />
      <BottomNavigationView />
    </>
  );
};

export default AppLayout;
