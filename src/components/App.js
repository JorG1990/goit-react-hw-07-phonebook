
import React from "react";
import { Contacts } from "./Contacts/Contacts";
import { Section } from "./Section/Section";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";

export const App = () => {
  return (
    <>
      <Section title="phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
