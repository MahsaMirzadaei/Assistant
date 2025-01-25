import { testDatabaseConnection } from "@/actions";
import Exp from "@/features/cooking/Exp";
import React from "react";

const page = async () => {
  const isConnected = await testDatabaseConnection();
  console.log(isConnected);
  return (
    <div>
      cooking
      <Exp />
    </div>
  );
};

export default page;
