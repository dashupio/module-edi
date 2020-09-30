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
   * Register all connect interfaces here
   * 
   * ```
   * // register connect class
   * register(Connect);
   * ```
   * 
   * Class `Connect` should extend `require('@dashup/module').Connect`
   * 
   * @param {Function} register 
   */
  actions(register) {
    // register sms action
    register(EdiConnect);
  }
}

// create new
module.exports = new EdiModule();
