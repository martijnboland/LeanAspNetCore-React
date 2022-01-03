import React from 'react';
import classNames from 'classnames';

export const TextArea: React.FC<any> = ({ input, meta, label, type, ...rest }) => {

  return (
    <div className="mb-3">
      {label &&
        <label htmlFor={input.name} className="form-label">{label}</label>    
      }
      <textarea {...input} {...rest} className={classNames('form-control', { 'is-invalid': (meta.error || meta.submitError) })}>{input.value}</textarea>
      {(meta.error || meta.submitError) && meta.touched && <div className="invalid-feedback">{meta.error || meta.submitError}</div>}
    </div>
  );

}

export const parseStringArrayFromTextArea = (value: string): string[] => {
  if (! value) {
    return [];
  }
  // split on newlines
  return value.split(/[\r\n]+/);
}

export const formatStringArrayToTextArea = (values: string[]): string => {
  if (! values) {
    return '';
  }
  return values.join("\n");
}