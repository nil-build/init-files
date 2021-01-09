import React from "react";
import { test } from "~/utils";

export const version = "%VERSION%";

test();

export default function Hello() {
  return <div className="hello">hello</div>;
}
