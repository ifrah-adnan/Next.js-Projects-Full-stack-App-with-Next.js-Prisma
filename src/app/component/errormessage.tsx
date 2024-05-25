import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const Errormessage = ({ children }: PropsWithChildren) => {
  return (
    <Text color="red" as="p">
      {" "}
      {children}
    </Text>
  );
};

export default Errormessage;
