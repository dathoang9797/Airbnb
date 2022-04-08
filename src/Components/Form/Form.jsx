import { FormCSS } from './Form.styles';
import { FormButtonCSS } from './FormButton';
import { FormDateCSS } from './FormDate';
import { FormIconCSS } from './FormIcon';
import FormInput from './FormInput';
import { FromSwitchCSS } from './FormSwitch';
import { FormSelectCSS } from './FormSelect';

const Form = {
  ...FormButtonCSS,
  ...FormIconCSS,
  ...FormCSS,
  ...FormDateCSS,
  ...FromSwitchCSS,
  ...FormSelectCSS,
  FormInput,
};

export default Form;
