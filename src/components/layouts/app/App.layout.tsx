import AppBarView from "_views/app-bar/AppBar.view";
import BlockListView from "_views/block-list/BlockList.view";
import BottomNavigationView from "_views/bottom-navigation/BottomNavigation.view";
import UserDrawerView from "_views/user-drawer/UserDrawer.view";
import AppDrawerView from "_views/app-drawer/AppDrawer.view";
import Web3DrawerView from "_/components/views/web3-drawer/Web3Drawer.view";

const AppLayout = () => {
  return (
    <>
      <AppBarView />
      <BlockListView />
      <BottomNavigationView />
      <UserDrawerView />
      <AppDrawerView />
      <Web3DrawerView />
    </>
  );
};

export default AppLayout;
