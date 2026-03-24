import { useUser } from "./useUser";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import { useForm } from "react-hook-form";
import type { UpdateUserFormValues } from "./authTypes";



const  UpdateUserForm:React.FC = () => {
  
  const { user } = useUser();
  
  const { fullName: currentFullName, email } = user?.user_metadata || {};
  
  const { register, handleSubmit, formState, getValues, reset } = useForm<UpdateUserFormValues>();
  
  const { errors } = formState;

  
  const { updateUser , isPending} = useUpdateUser();

  const onSubmit = ({fullName , avatar , password} :Partial<UpdateUserFormValues>) => {

    const imageFile = avatar instanceof FileList ? avatar[0] : avatar;
    
    
    updateUser({
      fullName , avatar : imageFile , password 
    }, {
      onSettled: () => reset() 
    })
  }

  return (
    <Form $type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow id="address"  label="Email address">
        <Input autoComplete="email" id="address"  value={email} disabled />
      </FormRow>
      <FormRow id="name" label="Full name">
        <Input
          id="name"
          type="text"
          defaultValue={currentFullName}
          disabled={isPending}
          {...register("fullName"
          )}
          autoComplete="full-Name"
        />
      </FormRow>
    
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
        id="pass"
      >
        <Input
          id="pass"
          type="password"
          autoComplete="current-password"
          disabled={isPending}
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        id="confirm"
        label="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          id="confirm"
          type="password"
          autoComplete="new-password"
          disabled={isPending}
          {...register("confirmPassword", {
            validate: (value) =>
              getValues().password === value || "Passwords don't match",
          })}
        />
      </FormRow>
      <FormRow id="avatar" label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          disabled={isPending}
          {...register("avatar"
          )}
        />
      </FormRow>
      <FormRow>
        <Button    disabled={isPending} type="reset" $variant="secondary" $size="medium">
          Cancel
        </Button>
        <Button  disabled={isPending} $variant="primary" $size="medium">Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserForm;