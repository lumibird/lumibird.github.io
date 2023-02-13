import { Home, People, Projects, NotFound } from "./components.js";

const root = document.getElementById("root");
const navigation = document.getElementById("navbar");

const routes = [
  { path: "", component: Home },
  { path: "people", component: People },
  { path: "projects", component: Projects },
];

const render = async () => {
  try {
    const hash = window.location.hash.replace("#", "");
    const component =
      routes.find((route) => route.path === hash)?.component || NotFound;
    root.replaceChildren(await component());
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener("hashchange", render);

window.addEventListener("DOMContentLoaded", render);
