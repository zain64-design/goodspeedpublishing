import Status from "@/app/_components/webComp/status/Status";

export default function NotFound() {
  return (
    <Status
      heading="Oops! Page Missing"
      subheading="We couldn’t find the page you were looking for. Try checking the URL or return home."
      linkLabel="go back home"
    />
  );
}
