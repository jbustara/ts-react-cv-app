import { createServer, Response } from "miragejs";
import { education, skills } from "./db";

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

      this.get("/skills", () => {
        return skills;
      });

      this.post("/skills", (schema, request) => {
        skills.push(JSON.parse(request.requestBody));
        return new Response(200, {}, { success: "ok" }); //args: statusCode, headers, data
      });
    },
  });
}
