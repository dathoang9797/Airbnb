import Form from '@Components/Form';
import { provincesVietNam } from '@/Utils/Common';

const {
  FormControl,
  FormGroup,
  FormItem,
  FormInput,
  InputNumber,
  FormSelect,
  FormCheckOutlined,
  FormOption,
} = Form;

export const renderFormLocationField = (
  field = null,
  errors = null,
  values = null,
  handleChange = null,
  handleInputNumber = null,
  handleChangeSelect = null
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

      case 'province': {
        const provincesVietNamSort = provincesVietNam.sort();
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Province'>
                <FormSelect
                  bordered={false}
                  onChange={handleChangeSelect}
                  defaultValue={provincesVietNam[0]}
                  menuItemSelectedIcon={<FormCheckOutlined />}
                  dropdownClassName='select-province'
                >
                  {provincesVietNamSort.sort().map((province, index) => {
                    return (
                      <FormOption key={`ProvinceSelect-${index}`} value={province}>
                        {province}
                      </FormOption>
                    );
                  })}
                </FormSelect>
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
