import React from 'react';
import classNames from 'classnames';

export const TextInput: React.FC<any> = ({ input, meta, label, type, ...rest }) => {

  const inputType = type || 'text';

  return (
    <div className="mb-3">
      {label &&
        <label htmlFor={input.name} className="form-label">{label}</label>
      }    
      <input {...input} {...rest} type={inputType} className={classNames('form-control', { 'is-invalid': (meta.error || meta.submitError) })} />
      {(meta.error || meta.submitError) && meta.touched && <div className="invalid-feedback">{meta.error || meta.submitError}</div>}
    </div>
  );
}