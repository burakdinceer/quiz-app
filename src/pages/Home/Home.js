import React from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../redux/dataSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const {
    questions,
    type,
    difficulties,
    categories,
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm()
  const navigate =  useNavigate()



  const onSubmit = (data) => {
     const getData = questions?.filter(
      (item) =>
        item.category === data.categories &&
        item.difficulty === data.difficulties &&
        item.type === data.type
    )
    const newData = getData.slice(0, +data.questionNumber);
    dispatch(filterData(newData));
    navigate("/quiz");
  } 


  return (
    <div className="form">
      <h1>Quiz App</h1>
      <div className="formSelect">
        <form className="formMain" onSubmit={handleSubmit(onSubmit)}>
          <select className="formCategory" {...register("categories")}>
            {categories?.map(item => (
              <option>{item.name}</option>
            ))}
          </select>
          <select className="formDifficulty" {...register("difficulties")}>
            {difficulties?.map(item => (
              <option>{item.name}</option>
            ))}
          </select>
          <select className="formType" {...register("type")}>
            {type?.map(item => (
              <option>{item.name}</option>
            ))}
          </select>
          <input  placeholder="Enter the number of questions" required='true' max={5} min={1} type='number' className="formInput" {...register("questionNumber")} />
              <button type="submit">Gönder</button>
             
              
             
        </form>
      </div>
    </div>
  );
};

export default Home;
