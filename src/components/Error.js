import { useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status, statusText } = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!!! Something Went Wrong</h1>
      <h3>
        {status}-{error?.message}
      </h3>
    </div>
  );
};

export default Error;
