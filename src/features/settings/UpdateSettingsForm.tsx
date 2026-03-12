import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';
import Spinner from '../../ui/Spinner';


const UpdateSettingsForm: React.FC = () => {
  
  const { settings: {
    minBookingLength, 
    maxBookingLength, 
    maxNumberGuestsPerBooking, 
    breakfastPrice
  } = {}, isLoading } = useSettings();
  
  const { mutate, isPending } = useUpdateSetting();
  
  
  if (isLoading) return <Spinner />

  const handleUpdateSetting = (e : React.FocusEvent<HTMLInputElement , Element> , setting:string) => {
    const  value  = e.target.value; 
    
    if (!value) return; 
    mutate({[setting]: value });
  }
  
  return (
    <Form type='regular'>
      <FormRow label='Minimum nights/booking'>
        <Input defaultValue={minBookingLength} type='number' id='min-nights'
          onBlur={e => handleUpdateSetting(e, "minBookingLength")
           }
           disabled={isPending}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input defaultValue={maxBookingLength} type='number' id='max-nights'
          onBlur={e => handleUpdateSetting(e, "maxBookingLength")}
               disabled={isPending}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input defaultValue={maxNumberGuestsPerBooking} type='number' id='max-guests'
          onBlur={e => handleUpdateSetting(e, "maxNumberGuestsPerBooking")}
             disabled={isPending}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input defaultValue={breakfastPrice} type='number' id='breakfast-price'
          onBlur={e => handleUpdateSetting(e, "breakfastPrice")}
             disabled={isPending}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;