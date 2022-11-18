import { Link, useNavigate } from "react-router-dom";

import RadioGroup from "../RadioGroup";
import Home from "../../pages/Home";
import { useState, useEffect } from "react";

const ageList = [
  {
    id: "1",
    value: "10대",
  },
  {
    id: "2",
    value: "20대",
  },
  {
    id: "3",
    value: "30대",
  },
  {
    id: "4",
    value: "40대",
  },
  {
    id: "5",
    value: "50대",
  },
];

function FirstSurvey() {
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [personData, setPersonData] = useState({
    name: id,
    gender: gender,
    age: age,
  });

  // useEffect(()=> {
  //   handleSubmit()
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData();
    console.log(personData);
  };

  function handleData() {
    setPersonData({
      name: id,
      gender: gender,
      age: age,
    });
  }

  const parentFunction = (x) => {
    console.log(x);
    setAge(x);
  };

  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-first-name"
            >
              이름
            </label>
            <input
              onChange={(e) => {
                {
                  setId(e.target.value);
                  console.log(id);
                }
              }}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              value={id}
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
            />

            {/* ----------------성별--------------------------------------------------------- */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-last-name"
            >
              성별
            </label>

            <select
              onChange={(e) => {
                {
                  setGender(e.target.value);
                  console.log(gender);
                }
              }}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              name="gender"
              type="text"
              value={gender}
            >
              <option value="disabled">성별을 선택하세요</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
            </select>
          </div>
        </div>
        {/* ----------------------------------연령대-------------------------------------- */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                  htmlFor="grid-state"
                >
                  연령대
                </label>
              </div>
              <div className="  px-3 mb-6 md:mb-0">
                <div className="relative">
                  <RadioGroup
                    list={ageList}
                    parentFunction={parentFunction}
                  ></RadioGroup>
                </div>
              </div>
            </div>
            <div className=" md:w-1/5 px-3 mb-6 md:mb-0">
              <div className="relative"></div>
            </div>
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
            <div></div>
          </div>
        </div>
        {/* =========================주소================================ */}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-state"
            >
              시
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-state"
            >
              군
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-state"
            >
              구
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col my-auto items-center mx-3">
          <button
            type="submit"
            className="bg-transparent hover:bg-indigo-500 text-blue-700 font-semibold  hover:text-white py-2.5 px-10 mt-5 border border-blue-500 hover:border-transparent rounded"
          >
            다음
          </button>
        </div>
      </form>
    </>
  );
}

export default FirstSurvey;
