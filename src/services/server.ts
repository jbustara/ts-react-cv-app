import { createServer, Response } from "miragejs";
import db from "./db.json";

export default function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      this.get(
        "/educations",
        () => {
          return db.education;
        },
        { timing: 3000 }
      );

      this.get("/skills", () => {
        return db.skills;
      });

      this.post("/skills", (schema, request) => {
        db.skills.push(JSON.parse(request.requestBody));
        console.log("db", db);
        return new Response(200, {}, { success: "ok" }); //args: statusCode, headers, data
      });
    },
  });
}
