

export interface LoginFormValues {
  email: string, 
  password: string;
}

export interface SignupFormValues {
  fullName: string; 
  email: string; 
  password: string; 
  confirmPassword: string; 
}

// we dont need confirm passwordin our Api
export type SubmitedSignup = Omit<SignupFormValues, "confirmPassword">;