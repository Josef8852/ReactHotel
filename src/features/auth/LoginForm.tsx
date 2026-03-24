import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVerical";
import MiniSpinner from "../../ui/MiniSpinner";
import { useForm } from "react-hook-form";
import type { LoginFormValues } from "./authTypes";



const  LoginForm:React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const { login, isPending } = useLogin();
  
  const {register , formState , handleSubmit} = useForm<LoginFormValues>()

  const { errors } = formState;
  
  const onSubmit = (): void => {
    
    
    if (!email || !password) return;
    
    login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    });
  }
  


  return (
    <Form $type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical error={errors.email?.message} htmlFor="email" label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          {...register("email" , {required : "This field is required"})}
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </FormRowVertical>
      <FormRowVertical error={errors.password?.message} htmlFor="password" label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
        {...register("password" , {required : "This field is required"})}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button $variant="primary" $size="large">{!isPending ? "Login" : <MiniSpinner/>}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;