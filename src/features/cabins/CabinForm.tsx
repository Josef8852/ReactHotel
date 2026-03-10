import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form"
import type { Cabin } from "./CabinTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import FormRow from "../../ui/FormRow";


const CabinForm: React.FC = () => {
  
  const queryClient = useQueryClient();
  
  const { register, handleSubmit, reset, getValues, formState } = useForm<Cabin>();
  
  const { errors }  = formState;
  
  const { mutate, isPending } = useMutation({
    
    mutationFn: createCabin,
    
    onSuccess: () => {
      
      toast.success("Cabin created Successfully");
      
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset();
    },
    onError: (err) => {
      
      toast.error(err.message);
    },
  })
  
  
  
  const onSubmit = (data : Cabin) : void => {
    mutate(data);
  }
  
 
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <FormRow id="name" label="Name" error={errors.name?.message} >
        <Input disabled={isPending} type="text" id="name" {...register("name", { required: "This field is required" })} />
      </FormRow>

      <FormRow id="maxCapacity" label="Maximum Capacity" error={errors.maxCapacity?.message}>
        <Input disabled={isPending} type="number" id="maxCapacity" {...register("maxCapacity",
          { required: "This field is required", min: { value: 1 , message:"Capacity should be at least 1"} })} />
      </FormRow>

      <FormRow id="regularPrice" label="Price" error={errors.regularPrice?.message}>
        <Input disabled={isPending} type="number" id="regularPrice" {...register("regularPrice",
          {min : {value: 1 , message:"Price should be greater than 0" }})} />
      </FormRow>

      <FormRow id="discount" label="Discount" error={errors.discount?.message} >
        <Input disabled={isPending} type="number" id="discount" {...register("discount",
          {
            required: "This field is required", 
            validate : (value) =>  value <= getValues().regularPrice || "Discount should be less than the regular Price"
          }
        )} />
      </FormRow>

      <FormRow id="description" label="Description">
        <Textarea disabled={isPending}  id="description" defaultValue="" {...register("description")}/>
      </FormRow>

      <FormRow id="image" label="Image URL">
        <FileInput disabled={isPending} id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button  size="small" variant="secondary" type="reset">
          Cancel
        </Button>
        <Button size="small" variant="primary" disabled={isPending}>Add Cabin</Button>
      </FormRow>
      {isPending ? <Spinner/> : null}
    </Form>
  );
}

export default CabinForm;