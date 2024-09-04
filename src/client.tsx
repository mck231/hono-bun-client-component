import { render } from 'hono/jsx/dom';
import {App} from "./App";

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}