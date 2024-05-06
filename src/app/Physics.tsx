import React from "react";
import Card from "./Card";
import "./globals.css";

interface PhysicsProps {}

const Physics: React.FC<PhysicsProps> = ({}) => {
  /**
   * SUMMARY
   *   Create a button name with unity loading Progress
   */
  return (
    <>
      <div className=" p-2 text-left font-extrabold text-5xl">
        Civil Engineering
      </div>
      <div className="flex flex-wrap justify-start">
        <div>
          <Card
            imageUrl={"Brick.jpg"}
            title="Brick Bonds"
            UnityBuildName="Brick"
            SceneIndex={1}
          />
        </div>
        <div>
          <Card
            imageUrl={"PlaneTable_3PointProblem.jpg"}
            title="Plane Table: Three Point Problem "
            UnityBuildName="PlaneTable_3PointProblem"
            SceneIndex={1}
          />
        </div>
      </div>
    </>
  );
};

export default Physics;
