import React, { useEffect, useState } from "react";
import Loading from "./Common/Loading/Loading";
/* eslint-disable */
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./Route/AppRoute";
import "./App.scss"
function App() {
  const initialData = [
    {
      name: "0",
      value: ""
    }, {
      name: "1",
      value: ""
    },
    {
      name: "2",
      value: ""
    },
    {
      name: "3",
      value: ""
    },
    {
      name: "4",
      value: ""
    },
    {
      name: "5",
      value: ""
    },
    {
      name: "6",
      value: ""
    },
    {
      name: "7",
      value: ""
    },
    {
      name: "8",
      value: ""
    },
  ]
  const [MyValues, setMyValues] = useState(initialData);
  const [goal, setGoal] = useState([
    {
      index: 0,
      value: ""
    },
    {
      index: 1,
      value: ""
    },
    {
      index: 2,
      value: ""
    },
    {
      index: 3,
      value: ""
    }, {
      index: 4,
      value: ""
    },
    {
      index: 5,
      value: ""
    },
    {
      index: 6,
      value: ""
    },
    {
      index: 7,
      value: ""
    },
    {
      index: 8,
      value: ""
    }
  ])
  const [user, setUser] = useState("x")
  const handleChange = (e, index) => {

    let { name, value } = e.target;
    if (value === "x" || value === "o") {
      // console.log(name,value,index)
      const newObj = goal.map((obj) => {
        const { index } = obj;
        if (index == name) {
          return {
            index,
            value
          }
        } else
          return obj;
      })
      setGoal(newObj)
    } else {
      console.log("please enter small caps ==> x or o")
    }
  }
  const res = (str) => {
    // 012
    // 345
    //678

    const val0 = goal[0].value;
    const val1 = goal[1].value;
    const val2 = goal[2].value;
    const val3 = goal[3].value;
    const val4 = goal[4].value;
    const val5 = goal[5].value;
    const val6 = goal[6].value;
    const val7 = goal[7].value;
    const val8 = goal[8].value;
    if (val0 === str && val1 === str && val2 == str) {
      console.log("winner", str)
    }
    else if (val3 === str && val4 === str && val5 == str) {
      console.log("winner", str)
    }
    else if (val6 === str && val4 === str && val2 == str) {
      console.log("winner", str)
    }
    else if (val6 === str && val7 === str && val8 == str) {
      console.log("winner", str)
    }
    else if (val0 === str && val3 === str && val6 == str) {
      console.log("winner", str)
    }
    else if (val6 === str && val7 === str && val8 == str) {
      console.log("winner", str)
    }
    else if (val2 === str && val5 === str && val8 == str) {
      console.log("winner", str)
    }
    else if (val0 === str && val4 === str && val8 == str) {
      console.log("winner", str)
    }
    else if (val1 === str && val4 === str && val7 == str) {
      console.log("winner", str)
    }

  }
  useEffect(() => {
    res("x");
    res("o")
  }, [goal])
  return (
    <div>

      <div className="btn">
        {user == "x" ?
          (<button
            onClick={() => {
              setUser("x")
            }}
          >btn submit</button>) : ((<button

            onClick={() => {
              setUser("o")
            }}
          >btn sbmit</button>))
        }
        {/* {user == "o" && 
      
    }  */}
      </div>
      <h1> please seethe console for output</h1>
      <h2> please enter the small letter x or o only </h2>    
      <div
        className="inputContainer"
      >
        {
          MyValues.map(({ name }, index) => {
            return (
              <div>
                <input key={name} name={name} onChange={(e) => {
                  handleChange(e, index)
                }} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
