import Form from '@Components/Form';

const { FormControl, FormGroup, FormItem, FormInput, InputNumber } = Form;

export const renderLocationField = (
  field = null,
  errors = null,
  values = null,
  handleChange = null,
  handleInputNumber = null
) => {
  return Object.keys(field).map((key, index) => {
    switch (key) {
      case 'name': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.name : ''}
              >
                <FormInput
                  type='text'
                  placeholder=' '
                  name='name'
                  onChange={handleChange}
                  childrenProps='Your Name '
                  value={values.name}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }
      case 'province': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.province : ''}
              >
                <FormInput
                  type='text'
                  placeholder=' '
                  name='province'
                  onChange={handleChange}
                  childrenProps='Your Province '
                  value={values.province}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'country': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.country : ''}
              >
                <FormInput
                  type='text'
                  placeholder=' '
                  name='country'
                  onChange={handleChange}
                  childrenProps='Your Country '
                  value={values.country}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'valueate': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Valueate'>
                <InputNumber
                  onChange={handleInputNumber('valueate')}
                  value={values.valueate ? values.valueate : null}
                  defaultValue={1}
                  min={1}
                  max={10}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      default:
        return null;
    }
  });
};
