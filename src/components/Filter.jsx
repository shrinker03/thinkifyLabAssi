import { Grid, Typography } from '@mui/material'
import React from 'react'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';


const Filter = () => {
  return (
    <Grid container paddingLeft={6}>
        <Grid item sm={3}>
            <Typography style={{fontWeight: 500}} variant='body1'>Filter By:</Typography>
        </Grid>
        <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled>
            <TabUnstyled style={{marginRight: 20}}>Unread</TabUnstyled>
            <TabUnstyled style={{marginRight: 20}}>Read</TabUnstyled>
            <TabUnstyled style={{marginRight: 20}}>Favourites</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>First content</TabPanelUnstyled>
        <TabPanelUnstyled value={1}>Second content</TabPanelUnstyled>
        <TabPanelUnstyled value={2}>Third content</TabPanelUnstyled>
        </TabsUnstyled>
    </Grid>
  )
}

export default Filter