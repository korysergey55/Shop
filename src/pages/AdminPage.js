import React from "react";
import Section from "../Components/section/Section";
import AdvForm from "../Components/admin/AdvForm";

const AdminPage = ({ data }) => {
  return (
    <>
      <Section title='Administration'>
        <AdvForm addNewAdv={data.addNewAdv} />
      </Section>
    </>
  );
};

export default AdminPage;
