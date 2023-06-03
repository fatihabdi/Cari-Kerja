import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(
    "Password must be 8 or more characters"
  );
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [userRegis, setUserRegis] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });
  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    password_confirmation: "",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    job_description: "",
    job_qualification: "",
    title: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_image_url: "",
    company_name: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  const handleInput = (e) => {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
    console.log(newData);
  };

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-example.sanbercloud.com/api/register", userRegis)
      .then((res) => {
        Navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    let id = parseInt(e.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-example.sanbercloud.com/api/login", dataLogin)
      .then((res) => {
        let user = res.data.user;
        let token = res.data.token;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        Navigate("/dashboard");
        console.log(res);
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        password,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        Navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDataLogin = (e) => {
    const newData = { ...dataLogin };
    newData[e.target.id] = e.target.value;
    setDataLogin(newData);
    console.log(newData);
  };

  const handleDataRegister = (e) => {
    const newData = { ...userRegis };
    newData[e.target.id] = e.target.value;
    setUserRegis(newData);
    console.log(newData);
  };

  const handlePassword = (e) => {
    const newData = { ...password };
    newData[e.target.id] = e.target.value;
    setPassword(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-example.sanbercloud.com/api/job-vacancy", input, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const handleEdit = (e) => {
    let id = parseInt(e.target.value);
    e.preventDefault();
    axios
      .put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        Navigate("/dashboard/list-ticket");
      });
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    filteredData,
    setFilteredData,
    wordEntered,
    setWordEntered,
    dataLogin,
    setDataLogin,
    userRegis,
    setUserRegis,
    password,
    setPassword,
    errorMsg,
    setErrorMsg,
  };

  let handleFunction = {
    handleInput,
    handleDelete,
    handleSubmit,
    handleEdit,
    handleFilter,
    clearInput,
    handleLogin,
    handleDataLogin,
    handleRegister,
    handleDataRegister,
    handleChangePassword,
    handlePassword,
    handleData,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
