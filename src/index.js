import App from "./App.svelte";

// Bootstrap to be enabled globally
import "bootstrap/dist/css/bootstrap.min.css";

const app = new App({
  target: document.body,
});

window.app = app;

export default app;
