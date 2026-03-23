import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVerical";
import { login } from "../../services/apiAuth";


const  LoginForm:React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent): void => {
    
    e.preventDefault();
    
    if (!email || !password) return;
    
    login({ email, password });
  }

  return (
    <Form $type="regular" onSubmit={handleSubmit}>
      <FormRowVertical htmlFor="email" label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical htmlFor="password" label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button $variant="primary" $size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;