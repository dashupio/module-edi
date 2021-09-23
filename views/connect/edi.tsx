
// import react
import moment from 'moment';
import shortid from 'shortid';
import { View } from '@dashup/ui';
import React, { useState, useEffect } from 'react';

// connect sheets
const ConnectEDI = (props = {}) => {
  // state
  const [data, setObject] = useState(null);

  // on field
  const onField = (field, value) => {
    // get fields
    const fields = props.connect.fields || {};

    // set value
    fields[value] = field.key;

    // on conect
    props.setConnect('fields', fields);
  };

  // get field
  const getField = (field, fields) => {
    // return value
    return [...(fields)].map((f) => {
      // return fields
      return {
        label    : f.label || f.name,
        value    : f.uuid,
        selected : (props.connect.fields || {})[f.uuid] === field.key,
      };
    });
  };

  // use effect
  useEffect(() => {
    // check file
    if (!props.connect.file) return;

    // action
    props.dashup.action({
      type   : 'connect',
      struct : 'edi',
    }, 'groups', props.connect, {}).then(setObject);
  }, [props.connect.file])

  // return jsx
  return props.connect.file ? (
    <>
      <div className="card card-sm bg-white mb-3">
        <div className="card-body d-flex flex-row">
          <div className="text-overflow flex-1">
            <b>{ props.connect.file.name }</b>
            <small className="d-block">
              Created { moment(props.connect.file.created).fromNow() }
            </small>
          </div>
          <div className="flex-0 align-items-center">
            <button className="btn btn-danger" onClick={ (e) => props.setConnect('file', null) }>
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">

          { Object.keys(data || {}).map((key, i) => {

            // return jsx
            return (
              <div key={ `${key}` } className={ `row ${i === 0 ? '' : 'mt-3'}` }>
                <div className="col-3">
                  <button className="btn btn-primary">
                    { key }
                  </button>
                </div>
                <div className="col-9">
                  { data[key].map((sub, a) => {
                    // return jsx
                    return (
                      <div key={ `${key}-${a}` } className={ a === 0 ? '' : 'mt-2' }>
                        { sub.map((val, x) => {
                          // return jsx
                          return (
                            <button key={ `${key}-${a}-${x}` } className="btn btn-secondary me-2 mb-1" onClick={ (e) => console.log(`${key}.${a}.${x}`) }>
                              { val }
                            </button>
                          );
                        }) }
                      </div>
                    );
                  }) }
                </div>
              </div>
            );
          }) }


        </div>
      </div>
    </>
  ) : (
    <div className="card mb-3">
      <div className="card-body">
        <View
          type="field"
          view="input"
          struct="file"

          field={ {
            uuid   : shortid(),
            label  : 'EDI File Example',
            accept : '.txt,.edi,.x12',
          } }
          value={ props.connect.file }
          dashup={ props.dashup }
          onChange={ (field, value) => props.setConnect('file', value) }
        />
      </div>
    </div>
  );
};

// export default
export default ConnectEDI;