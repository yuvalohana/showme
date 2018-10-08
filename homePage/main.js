
import unicornsRepository from './unicornsRepository.js';
import unicornsRenderer from './unicornsRenderer.js';
import eventHandler from './eventHandler.js'; 

let Repository = new unicornsRepository();
let Renderer = new unicornsRenderer();
let Handler = new eventHandler(Repository, Renderer);

Handler.unicorns();
Handler.onLoad();
Handler.removeUnicorn();
