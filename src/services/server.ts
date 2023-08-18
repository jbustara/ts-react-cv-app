import { createServer } from "miragejs";
import { education } from "../constants";

export default function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      this.get(
        "/educations",
        () => {
          return education;
        },
        { timing: 3000 }
      );

      this.get(
        "/skills",
        () => {
          return skills;
        },
        { timing: 3000 }
      );

      this.post("/skills", () => {
        return education;
      });
    },
  });
}
