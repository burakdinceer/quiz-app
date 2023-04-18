import React from "react";
import "./Home.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormSelect } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {formData,formNumber} from '../../redux/dataSlice'


const Home = () => {
 const {questions,type,difficulties,categories} = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const handleForm = (e) => {
   dispatch(formData({[e.target.name]:e.target.value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = questions?.filter((item) => (
      item.category === formData[0].category &&
      item.difficulty === formData[1].difficulty &&
      item.type === formData[2].type
    ))
    console.log(getData)
  }

  const handleNumber = (e) => {
    
    dispatch(formNumber(e.target.value))
  }

  return (
    <div className="form">
      <h1>Quiz App</h1>
      <div className="formSelect">
        <Form onSubmit={handleSubmit} className="formMain">  
          <FormSelect onChange={handleForm}
            className="formCategory"
            name="categories"
            value={categories.name}
          >
            <option>Select Category...</option>
            {categories?.map((item) => (
              <option>{item.name}</option>
            ))}
          </FormSelect>
          <FormSelect onChange={handleForm}
            className="formDifficulty"
            name="difficulties"
            value={difficulties.name}
          >
            <option>Select Difficulty...</option>
            {difficulties?.map((item) => (
              <option>{item.name}</option>
            ))}
          </FormSelect>
          <FormSelect onChange={handleForm}
           className="formType" name="type" value={type.name}>
            <option>Select Question Type...</option>
            {type?.map((item) => (
              <option>{item.name}</option>
            ))}
          </FormSelect>
          <input
            className="formInput"
            type="number"
            name="number"
            min={0}
            max={5}
            placeholder='Enter the number of questions...'
            onChange={handleNumber}
          ></input>
          <Button type="submit">Quize Git</Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
