import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const issues = () => {
  return (
    <Link href="/issues/new">
      <Button>New Issue</Button>
    </Link>
  );
};

export default issues;
