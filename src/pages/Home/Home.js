import React from "react";
import "./Home.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormSelect } from "react-bootstrap";
import { useSelector } from "react-redux";

const Home = () => {
  const { categories, difficulties, type } = useSelector((state) => state.data);

  return (
    <div className="form">
      <h1>Quiz App</h1>
      <div className="formSelect">
        <Form className="formMain">
          <FormSelect
            className="formCategory"
            name="categories"
            value={categories.name}
          >
            <option>Select Category...</option>
            {categories?.map((item) => (
              <option>{item.name}</option>
            ))}
          </FormSelect>
          <FormSelect
            className="formDifficulty"
            name="difficulties"
            value={difficulties.name}
          >
            <option>Select Difficulty...</option>
            {difficulties?.map((item) => (
              <option>{item.name}</option>
            ))}
          </FormSelect>
          <FormSelect className="formType" name="type" value={type.name}>
            <option>Select Question Type...</option>
            {type?.map((item) => (
              <option>{item.name}</option>
            ))}
          </FormSelect>
          <Button>Quize Git</Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
