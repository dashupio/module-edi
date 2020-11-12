// require first
const { Module } = require('@dashup/module');

// import base
const EdiConnect = require('./connects/edi');

/**
 * export module
 */
class EdiModule extends Module {

  /**
   * construct discord module
   */
  constructor() {
    // run super
    super();
  }
  
  /**
   * Register all interfaces here
   */
  register(fn) {
    // register sms action
    fn('connect', EdiConnect);
  }
}

// create new
module.exports = new EdiModule();
