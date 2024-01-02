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
            <span className="custom-label">Campaign</span>
            <TextField className="text-field" value={campaign} onChange={(value) => setCampaign(value)} />
            <span className="custom-label">Title</span>
            <TextField value={title} onChange={(value) => setTitle(value)} />
            <span className="custom-label">Description</span>
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
