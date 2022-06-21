import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArchiveIcon from '@mui/icons-material/Archive';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <BottomNavigation sx={{ width: 600 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
            label="Requests"
            value="requests"
            icon={<AddBusinessIcon />}
        />
        <BottomNavigationAction
            label="Deceased"
            value="deceased"
            icon={<AssignmentIndIcon />}
        />
        <BottomNavigationAction
            label="Map"
            value="map"
            icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
            label="Inbox"
            value="inbox"
            icon={<ArchiveIcon />}
        />
        <BottomNavigationAction
            label="Source"
            value="Source"
            icon={<BookmarksIcon />}
        />
        </BottomNavigation>
    );
}