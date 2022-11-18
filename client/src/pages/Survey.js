import React, { useState } from "react";

import Layout from "./../components/Layout";
import Hero from "./../components/Hero";
import FirstSurvey from "../components/surveys/FirstSurvey";
import SecondSurvey from "../components/surveys/SeondSurvey";

let Survey = () => {
  const [pageState, setPageState] = useState(0);
  // const [aaa, setAaa] = useState({
  //   name:'',
  //   gender:'',
  //   age:'',
  // })

  let handlePage = (e) => {
    setPageState(pageState + 1);
  };

  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow  lg:lex-grow ">
              <div className="flex justify-center">
                {pageState === 0 ? <FirstSurvey /> : <SecondSurvey />}
              </div>
              <button onClick={handlePage}>eeeeee</button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Survey;
