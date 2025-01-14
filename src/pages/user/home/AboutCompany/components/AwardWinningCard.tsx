import React from "react";
import { IoTrophyOutline } from "react-icons/io5";

const AwardWinningCard: React.FC = () => {
  return (
    <div className="p-6  w-[20rem] bg-white rounded-lg shadow-md">
      <IoTrophyOutline size={30} color="blue"/>
      <div>
        <h1 className="text-blue-950 text-2xl font-semibold">Award Winning</h1>
        <p className="text-gray-700 text-xl">
          We have a history of successfully delivering IT solutions to a great
          diverse clientele, from startups to established enterprises.
        </p>
      </div>
    </div>
  );
};

export default AwardWinningCard;
