
// import connect interface;
import got from 'got';
import { Struct } from '@dashup/module';
import { X12parser } from 'x12-parser';
import { createReadStream } from 'fs';

/**
 * build address helper
 */
export default class EDIConnect extends Struct {
  /**
   * construct google connector
   *
   * @param args 
   */
  constructor(...args) {
    // run super
    super(...args);
    
    // save action
    this.groupsAction = this.groupsAction.bind(this);
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
    return 'fa fa-money-check-edit';
  }

  /**
   * returns connect data
   */
  get data() {
    // return connect data
    return {
      
    };
  }

  /**
   * returns object of views
   */
  get views() {
    // return object of views
    return {
      config : 'connect/edi',
    };
  }

  /**
   * returns connect actions
   */
  get actions() {
    // return connect actions
    return {
      groups : this.groupsAction,
    };
  }

  /**
   * returns category list for connect
   */
  get categories() {
    // return array of categories
    return ['model'];
  }

  /**
   * returns connect descripton for list
   */
  get description() {
    // return description string
    return 'Google Sheets Connector';
  }

  /**
   * groups action
   *
   * @param opts 
   * @param connect 
   */
  async groupsAction(opts, connect) {
    // data
    const data = [];
    
    // stream
    const parser = new X12parser();

    // await
    const promise = new Promise(async (resolve, reject) => {
      // parser
      parser
        .on('error', reject)
        .on('data', (r) => data.push(r))
        .on('end', resolve);
    });

    // fetch
    got.stream(connect.file[0] ? connect.file[0].url : connect.file.url)
      .pipe(parser);

    // await promise
    await promise;

    // loop data
    const dataObj = data.reduce((accum, item) => {
      // check item value
      if (!accum[item.name]) accum[item.name] = [];

      // value
      const value = [];

      // for
      for (let i = 1; i < 100; i++) {
        // check
        if (!item[i]) break;
        
        // push
        value.push(item[i]);
      }

      // add item
      accum[item.name].push(value);

      // return accum
      return accum;
    }, {});

    // return object
    return dataObj;
  }
}