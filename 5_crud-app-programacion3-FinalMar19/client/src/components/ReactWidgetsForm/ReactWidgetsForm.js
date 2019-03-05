import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import SelectList from 'react-widgets/lib/SelectList';
import Multiselect from 'react-widgets/lib/Multiselect';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import DatePicker from 'react-datepicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment-localizer';

import 'react-widgets/dist/css/react-widgets.css';

momentLocaliser(moment)

const colors = [ { color: 'Rojo', value: 'ff0000' },
  { color: 'Verde', value: '00ff00' },
  { color: 'Azul', value: '0000ff' } ]

const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

const renderMultiselect = ({ input, data, valueField, textField }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
  />

const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

let ReactWidgetsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Su Color Favorito</label>
        <Field
          name="favoriteColor"
          component={renderDropdownList}
          data={colors}
          valueField="value"
          textField="color"/>
      </div>
      <div>
        <label>Hobbies</label>
        <Field
          name="hobbies"
          component={renderMultiselect}
          data={[ 'Guitarra', 'Ciclismo', 'Natación' ]}/>
      </div>
      <div>
        <label>Sexo</label>
        <Field
          name="sex"
          component={renderSelectList}
          data={[ 'Masculino', 'Femenino' ]}/>
      </div>
      <div>
        <label>Fecha de Nacimiento</label>
        <Field
          name="dob"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
        <button href="/welcomes">Cancelar</button>
      </div>
    </form>
  )
}

ReactWidgetsForm = reduxForm({
  form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

export default ReactWidgetsForm