import React, { Fragment } from 'react';
import { FormInputCSS } from './FormInput.styles';

export default function FormInput(props) {
  const { childrenProps, ...rest } = props;
  return (
    <Fragment>
      <FormInputCSS.FormInput {...rest} />
      <FormInputCSS.FormLabel>{childrenProps}</FormInputCSS.FormLabel>
      <FormInputCSS.FormFieldSet>
        <FormInputCSS.FormLegend>
          <FormInputCSS.FormSpan>{childrenProps}</FormInputCSS.FormSpan>
        </FormInputCSS.FormLegend>
      </FormInputCSS.FormFieldSet>
    </Fragment>
  );
}
