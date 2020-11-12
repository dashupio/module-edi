
// import connect interface
import { Struct } from '@dashup/module';

/**
 * build address helper
 */
export default class EDIConnect extends Struct {
  /**
   * construct edi connector
   *
   * @param args 
   */
  constructor(...args) {
    // run super
    super(...args);
    
  }

  /**
   * returns connect type
   */
  get type() {
    // return connect type label
    return 'edi';
  }

  /**
   * returns connect type
   */
  get title() {
    // return connect type label
    return 'EDI';
  }

  /**
   * returns connect icon
   */
  get icon() {
    // return connect icon label
    return 'fab fa-edi';
  }

  /**
   * returns connect data
   */
  get data() {
    // return connect data
    return {};
  }

  /**
   * returns object of views
   */
  get views() {
    // return object of views
    return {
    //  config : 'connect/edi/config',
    };
  }

  /**
   * returns connect actions
   */
  get actions() {
    // return connect actions
    return {
      guild : this.guildAction,
    };
  }

  /**
   * returns category list for connect
   */
  get categories() {
    // return array of categories
    return ['channel'];
  }

  /**
   * returns connect descripton for list
   */
  get description() {
    // return description string
    return 'EDI Connector';
  }

  /**
   * action method
   *
   * @param param0 
   * @param connect 
   * @param data 
   */
  async save({ req, dashup }, connect) {
    // check dashup
    if (!dashup) return;
    
  }
}