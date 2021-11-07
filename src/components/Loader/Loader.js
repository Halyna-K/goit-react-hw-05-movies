import Loader from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <Loader
      style={{ textAlign: "center" }}
      // className="container"
      type="Grid"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
