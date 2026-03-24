import { useForm } from "react-hook-form";
import type { SignupFormValues, SubmitedSignup } from "./authTypes";
import { useSignup } from "./useSignup";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";




const SignupForm: React.FC = () => { 
  
  
  const { register, formState, getValues, handleSubmit , reset } = useForm<SignupFormValues>();
  
  const { errors } = formState;
  
  const {signup , isPending } = useSignup();
  
  const onSubmit = ({fullName , password , email} : SubmitedSignup) : void => {
    signup({
      fullName , password , email
    }, {
      onSettled : () => reset()
    })
  }
  
  return (
    <Form $type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors.fullName?.message}>
        <Input disabled={isPending} type="text" id="fullName" {...register("fullName" , {required : "This field is required"})} />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Input disabled={isPending} autoComplete="new-email" type="email" id="email"  {...register("email", {
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/, 
            message : "Please provide a valid email address"
          }
        })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors.password?.message}>
        <Input disabled={isPending} autoComplete="new-password"  type="password" id="password" {...register("password", {
          required: "This field is required", 
          minLength: {
            value: 8,
            message : "Password atleast 8 characters"
          }
        })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors.confirmPassword?.message}>
        <Input disabled={isPending} autoComplete="new-password" type="password" id="passwordConfirm" {...register("confirmPassword", {
          validate : (value) => Number(value) === Number(getValues().password) || "Passwords don't match"
        })} />
      </FormRow>

      <FormRow>

        <Button disabled={isPending} $variant="secondary" $size="medium" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending} $variant="primary" $size="large" >Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;

