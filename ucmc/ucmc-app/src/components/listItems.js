import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaymentIcon from '@mui/icons-material/Payment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <Link href="/" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Link href="/patients" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Patients" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <AccessTimeFilledIcon />
      </ListItemIcon>
      <ListItemText primary="Time Card" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Logistics" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="X-Ray Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InventoryIcon />
      </ListItemIcon>
      <ListItemText primary="Supply Inventory" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InventoryOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Sales Inventory" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PointOfSaleIcon />
      </ListItemIcon>
      <ListItemText primary="Point of Sale (POS)" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Payments" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExitToAppOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);