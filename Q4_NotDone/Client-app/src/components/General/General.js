import React, { useState } from "react";
import { Page, TextField, Layout, Label, Button } from "@shopify/polaris";
import "./General.css";
const General = () => {
  const [campaign, setCampaign] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Page title="General">
      <Layout>
        <Label className="custom-label">Campaign</Label>
        <TextField
          value={campaign}
          onChange={(value) => setCampaign(value)}
          className="custom-input"
        />
        <Label className="custom-label">Title</Label>
        <TextField
          value={title}
          onChange={(value) => setTitle(value)}
          className="custom-input"
        />

        <Label className="custom-label">Description</Label>
        <TextField
          value={description}
          onChange={(value) => setDescription(value)}
          className="custom-input"
          multiline
        />
        {/* <Stack distribution="trailing">
          <Button className="custom-button" primary submit>
            Save
          </Button>
        </Stack> */}
      </Layout>
    </Page>
  );
};

export default General;
