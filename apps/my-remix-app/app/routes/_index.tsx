import { Button } from "shared-ui";
import type { V2_MetaFunction } from "@remix-run/node";
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return <Button onClick={() => console.log("clicked")}>ashish</Button>;
}
