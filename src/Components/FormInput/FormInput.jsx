import React, { Fragment } from 'react';
import { FormInputStyle } from './FormInput.styles';

const { FormFieldSet, FormInput, FormLabel, FormLegend, FormSpan } = FormInputStyle;

export default function FormInputComponent(props) {
  const { childrenProps, ...rest } = props;
  return (
    <Fragment>
      <FormInput {...rest} />
      <FormLabel>{childrenProps}</FormLabel>
      <FormFieldSet>
        <FormLegend>
          <FormSpan>{childrenProps}</FormSpan>
        </FormLegend>
      </FormFieldSet>
    </Fragment>
  );
}
