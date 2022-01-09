// Centralized Express Router Wrapper
const { Router } = require('express');

class Controller {
  constructor() {
    this.router = Router();
  }

  getRouter() {
    return this.router;
  }
}
exports.Controller = Controller;
