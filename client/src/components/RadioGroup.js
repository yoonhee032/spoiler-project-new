import React from "react";
import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";

const InputA = tw.input`

opacity-0
  `;

const LabelA = tw.label`

border
border-indigo-200 
text-gray-500 
text-center
py-fit-content px-fit-content
rounded 

focus:ring-4 
focus:bg-white 
focus:border-gray-500

dark:focus:border-indigo-300
dark:hover:bg-black-100
dark:hover:border-indigo-300 

`;





export default function RadioGroup({ list, parentFunction }) {
    const [age, setAge] = useState("");

    parentFunction(age);

  return (
    <>
      <div mr-2="true">
        {list.map((list) => (
          <LabelA key={list.value}>
            <InputA
              id={list.value}
              value={list.value}
              name="age"
              type="radio"
              onChange={(e) => {
                {
                    setAge(e.target.value);
                }
              }}
             
            />
            {list.value}
          </LabelA>
        ))}
      </div>
    </>
  );
}
