import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import type { SortByProps, SortOptionsObj } from "./UITypes";


const SortBy: React.FC<SortByProps> = ({ options }) => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  
  const sortBy = searchParams.get("sortBy") as SortOptionsObj["value"];
  
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  
  return (
    <Select value={sortBy} options={options} type="white" onChange={handleChange}>
      
    </Select>
  )
  
}

export default SortBy;