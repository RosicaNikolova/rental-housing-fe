import * as React from 'react';
import { Tab } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import RequestsList from './RequestsList';

function TabsPannel(){

  const requestsFilters = ['pending', 'approved', 'disaproved'];
  const[selectedTab, setSelectedTab] = useState(0);
  const handleTabs =(event, val) =>{
    console.warn(val)
    setSelectedTab(val)
  }

  return(
<div>
    <Tabs sx={{bgcolor: "red"}} centered={true} value={selectedTab} onChange={handleTabs}>
    <Tab label={requestsFilters[0]}>
    </Tab>
    <Tab label={requestsFilters[1]}>
      </Tab>
    <Tab label={requestsFilters[2]}>
    </Tab>
    </Tabs>
<RequestsList requestType= {requestsFilters[selectedTab]}/>

    {/* <TabPanel value={value} index={0}> Item 1</TabPanel>
    <TabPanel value={value} index={1}> Item 2</TabPanel>
    <TabPanel value={value} index={2}> Item 3</TabPanel> */}
</div>
  );

}

// function TabPanel(props){

//   const{children, value, index} = props;
//   return(
//     <div>{
//        value === index &&(
//         <h1>{value}</h1>
//        )     
// }
//     </div>
//   )
// }


export default TabsPannel