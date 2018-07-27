import * as React from 'react';
import * as classNames from 'classnames';

export const TextInput: React.SFC<any> = ({ input, meta, label, type, ...rest }) => {

  const inputType = type || 'text';

  return (
    <div className="form-group">
      {label &&
        <label htmlFor={input.name}>{label}</label>
      }    
      <input {...input} {...rest} type={inputType} className={classNames('form-control', { 'is-invalid': (meta.error || meta.submitError) })} />
      {(meta.error || meta.submitError) && meta.touched && <div className="invalid-feedback">{meta.error || meta.submitError}</div>}
    </div>
  );
}