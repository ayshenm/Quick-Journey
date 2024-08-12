import { Button } from "../ui/button";


const ErrorScreen = (props: any) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="wrapper w-1/2 text-center flex flex-col gap-y-4">
        <h2 className="text-4xl font-semibold">Woops, Something went wrong :(</h2>
        <p className="font-semibold text-lg">
          Error: <span className="underline font-normal">{props.error.message}</span>
        </p>

        <Button className="w-auto mx-auto block mt-6" onClick={() => window.location.reload()}>
          Reload page
        </Button>
      </div>
    </div>
  );
};

export default ErrorScreen;
