import React, { useState } from 'react';
import { Page, TextField, Layout, Label } from '@shopify/polaris';
import  './General.css'
const General = () => {
  const [campaign, setCampaign] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  return (
    <Page title="General">
        <Layout>
            <Label className={"custom-label"}>Campaign</Label>
            <TextField value={campaign} onChange={(value) => setCampaign(value)} />
            <Label>Title</Label>
            <TextField value={title} onChange={(value) => setTitle(value)} />
            <Label>Description</Label>
            <TextField value={description} onChange={(value) => setDescription(value)} />
          {/* <Stack distribution="trailing">
            <Button primary submit>
              Save
            </Button>
          </Stack> */}
        </Layout>
    </Page>
  );
};

export default General;
