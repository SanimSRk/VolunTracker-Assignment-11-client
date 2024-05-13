import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MonageMyPost from '../Pages/Volunteer/MonageMyPost';
import MyRequestData from '../Pages/MyRequstData/MyRequestData';
import { useEffect } from 'react';
const AllManageMyPost = () => {
  useEffect(() => {
    document.title = 'Manage-My-Post';
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>My Need Volunteer Post</Tab>
          <Tab>My Volunteer Request Post</Tab>
        </TabList>

        <TabPanel>
          <MonageMyPost></MonageMyPost>
        </TabPanel>
        <TabPanel>
          <MyRequestData></MyRequestData>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllManageMyPost;
