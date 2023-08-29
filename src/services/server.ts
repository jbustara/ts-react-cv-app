import { createServer, Response } from "miragejs";
import { education } from "./db";
import { SkillData } from "../types";

let skills: SkillData[] = [];

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

      this.post("/skills/all", (schema, request) => {
        skills = JSON.parse(request.requestBody);
        return new Response(200, {}, { success: "ok" }); //args: statusCode, headers, data
      });
    },
  });
}
