import { useSearchParams } from "next/navigation";

const page = (props) => {
  let location = decodeURIComponent(props.params.location);

  return <div>{location}</div>;
};

export default page;
