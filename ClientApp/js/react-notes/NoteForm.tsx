import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextInput } from '../components/TextInput';
import { TextArea } from '../components/TextArea';
import { Note } from './models';

interface NoteFormProps {
  handleSave: (note: Note) => Promise<any>
}

const NoteForm: React.FC<NoteFormProps> = (props) => {
  
  return (
    <Form
      onSubmit={props.handleSave}
      render={({ handleSubmit, pristine, submitting, submitError, form }) => {
        
        return (
          <form onSubmit={(e) => handleSubmit(e)?.then(res => { 
            if (!res) {
              form.reset();
            }
           })}>
            {submitError && <div className="alert alert-danger">{submitError}</div>}
            <Field name="title" component={TextInput} placeholder="Title" />
            <Field name="content" component={TextArea} placeholder="Content" rows="5" />
            <div className="float-right">
              <button type="submit" className="btn btn-primary" disabled={submitting || pristine}>Create note</button>
            </div>
          </form>
        )
      }}/>
  );
};

export default NoteForm;