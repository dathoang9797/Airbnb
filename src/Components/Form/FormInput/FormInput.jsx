import React, { Fragment } from 'react';
import { FormInputCSS } from './FormInput.styles';

function FormInput(props) {
  const { childrenProps, ...rest } = props;
  const { FormInput, FormLabel, FormFieldSet, FormLegend, FormSpan } = FormInputCSS;
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

export default React.memo(FormInput);
