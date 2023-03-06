import React from "react";
import {useState} from "react";
import {FiCheck} from "react-icons/fi";

const StepsName = () => {
  const formArray = [1, 2, 3, 4, 5, 6, 7];

  const [formNo, setFormNo] = useState(formArray[0]);

  const next = () => {
    if (formNo === 1) {
      setFormNo(formNo + 1);
    } else if (formNo === 2) {
      setFormNo(formNo + 1);
    } else if (formNo === 3) {
      setFormNo(formNo + 1);
    } else if (formNo === 4) {
      setFormNo(formNo + 1);
    } else if (formNo === 5) {
      setFormNo(formNo + 1);
    } else if (formNo === 6) {
      setFormNo(formNo + 1);
    } else if (formNo === 7) {
      setFormNo(formNo + 1);
    } else {
      alert("Please fillup all input field");
      // toast.error("Please fillup all input field");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };



  const items = [
    {
      title: "Edge Device",
      subtitle: "Lorem ipsum dolor",
      active: true,
      disabled: false,
    },
    {
      title: "Camera",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: false,
    },
    {
      title: "LOT",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: false,
    },
    {
      title: "Cloud",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: false,
    },
    {
      title: "ML Model",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: false,
    },
    {
      title: "Validation",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: false,
    },
    {
      title: "System Config",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: false,
    },
  ];
  return (
    <>

      <div className="flex flex-col w-full mb-8 lg:flex-wrap lg:flex-row">
        {items.map((item, key) => (
          <div
            key={key}
            className={`flex w-full lg:flex-1 items-center p-2 justify-start ${
              formNo - 1 != key
                ? formNo <= key
                  ? "cursor-pointer opacity-25"
                  : ""
                : "text-white bg-blue-500"
            }`}
            onClick={() => {
              // eslint-disable-next-line
              console.log(item);
            }}>
            <div className="shrink-0 w-8">
              <span
                className={`h-8 w-8 ${
                  formNo - 1 === key || formNo > formArray.length
                    ? "bg-white text-gray-900"
                    : "bg-blue-500 text-white"
                } flex items-center justify-center rounded-full text-lg font-display font-bold`}>
                {formNo > key + 1 ? (
                  <FiCheck size={24} className="text-white-500 bg-blue-500" />
                ) : (
                  key + 1
                )}
              </span>
            </div>

            <div className="flex flex-col w-full ml-4">
              <div className="text-sm font-bold">{item.title}</div>
              {/* <div className="text-sm">{item.subtitle}</div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StepsName;
