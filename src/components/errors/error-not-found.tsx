import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { paths } from "@/routes/paths";
import Error from "@/assets/home/error.png"

const ErrorNotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <img className="w-1/2" src={Error} alt="errorImg"/>
        <h4 className="font-semibold text-2xl">404</h4>
        <h2 className="font-bold text-3xl">Hmm, that didn’t work</h2>
        <p className="text-muted-foreground text-lg text-center">That page can’t be reached , but if you double-check it we ‘re  happy to try it again.  </p>
        <Button>
          <Link to={paths.guest.root}>Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorNotFound;
