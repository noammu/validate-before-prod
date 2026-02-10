import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("why-validate", "./routes/why-validate.tsx"),
  route("methods", "./routes/methods.tsx"),
  route("benefits", "./routes/benefits.tsx"),
] satisfies RouteConfig;
