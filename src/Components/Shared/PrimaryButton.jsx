import React, { useState } from "react";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";

const MealPlanLinks = [
  {
    id: 1,
    name: "A day plan #5.000",
    links: "/#",
  },
  {
    id: 2,
    name: "2-3 days plan #15,000",
    links: "/#",
  },
  {
    id: 3,
    name: "4-5 days plan #25,000",
    links: "/#",
  },
  {
    id: 4, // Changed id to avoid duplication
    name: "6-7 days plan #50,000",
    links: "/#",
  },
];

const PrimaryButton = () => {
  const [checkedPlans, setCheckedPlans] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedPlans((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative flex items-center group">
      <button className="bg-primary h-[40px] text-white px-3 py-2 flex items-center">
        Choose Your Meal Plan
        <span className="ml-2">
          <FaCaretDown className='group-hover:rotate-180 duration-300' />
        </span>
        <div className='absolute z-[9999] hidden group-hover:block w-[250px] bg-white px-4 py-4 text-black shadow-md'>
          <ul>
            {MealPlanLinks.map(({ id, name, links }) => (
              <li key={id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`plan-${id}`}
                  checked={!!checkedPlans[id]}
                  onChange={() => handleCheckboxChange(id)}
                  className="mr-2"
                />
                <label htmlFor={`plan-${id}`} className="text-xl inline-block w-full rounded-md hover:bg-primary/20 px-2 py-2">
                  <a href={links} className="text-black">{name}</a>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </button>
      <FaArrowRight className="inline-block group hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-PrimaryDark text-white" />
    </div>
  );
};

export default PrimaryButton;