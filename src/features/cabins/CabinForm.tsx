import {useForm} from "react-hook-form"
import type { CabinFormProps, CabinFormValues } from "./CabinTypes";
import { useCreateUpdateCabin } from "./useCreateUpdateCabin";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import Spinner from "../../ui/Spinner";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";



const CabinForm: React.FC<CabinFormProps> = ({cabinToEdit}) => {
  
  const { id: editId, ...editValues } = cabinToEdit ?? {};
  
  
  const isEditSession: boolean = Boolean(editId);
  

  const { register, handleSubmit, reset, getValues, formState } = useForm<CabinFormValues>({
    defaultValues: isEditSession ? editValues : {}, 
  });
  
      const { mutate, isPending } = useCreateUpdateCabin(editId , reset);
  
   const { errors } = formState;

  

  
  const onSubmit = (data: CabinFormValues): void => {
    
    // string -> image already exists 
    // FileList contains multiple files 
    
    const image: string | File = typeof data.image === "string" ? data.image : data.image[0]
      ?? cabinToEdit?.image 
      ;
    
    mutate({
      newCabin: { ...data, image }, 
      id: editId 
    });
    
    
  }
  
 
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <FormRow id="name" label="Name" error={errors.name?.message} >
        <Input disabled={isPending} type="text" id="name" {...register("name",
          { required: "This field is required" })} />
      </FormRow>

      <FormRow id="maxCapacity" label="Maximum Capacity" error={errors.maxCapacity?.message}>
        <Input disabled={isPending} type="number" id="maxCapacity" {...register("maxCapacity",
          {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })} />
      </FormRow>

      <FormRow id="regularPrice" label="Price" error={errors.regularPrice?.message}>
        <Input disabled={isPending} type="number" id="regularPrice" {...register("regularPrice",
          {min : {value: 1 , message:"Price should be greater than 0" }})} />
      </FormRow>

      <FormRow id="discount" label="Discount" error={errors.discount?.message} >
        <Input defaultValue={0} disabled={isPending} type="number" id="discount" {...register("discount",
          { 
            validate : (value) =>  Number(value) <= Number(getValues().regularPrice) || "Discount should be less than the regular Price"
          }
        )} />
      </FormRow>

      <FormRow id="description" label="Description">
        <Textarea   id="description" defaultValue="" {...register("description")}/>
      </FormRow>

      <FormRow id="image" label="Image">
        <FileInput type="file" disabled={isPending} id="image" accept="image/*" {...register("image",
          { required: isEditSession ?  false :"Please upload an image" })} />
        <Error>{errors.image?.message}</Error>
      </FormRow>

      <FormRow>
        <Button  size="small" variant="secondary" type="reset">
          Cancel
        </Button>
        <Button size="small" variant="primary" disabled={isPending}>
          {isEditSession ? "Edit Cabin" : "Add Cabin"}</Button>
      </FormRow>
      {isPending ? <Spinner/> : null}
    </Form>
  );
}

export default CabinForm;