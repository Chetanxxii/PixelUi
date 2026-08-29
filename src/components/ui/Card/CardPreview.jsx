import Button from "../Button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

const CardPreview = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Pro Plan</CardTitle>

          <CardDescription>
            Perfect for developers.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            ₹499
          </p>

          <p className="mt-2 text-zinc-600">
            Lifetime access.
          </p>
        </CardContent>

        <CardFooter>
          <Button fullWidth>
            Buy Now
          </Button>
        </CardFooter>
      </Card>

      <Card className="hover:-translate-y-1 hover:shadow-lg transition-all">
        <CardContent>
          <div className="mb-4 h-12 w-12 rounded-xl bg-zinc-900"></div>

          <h3 className="font-semibold">
            Minimal Card
          </h3>

          <p className="mt-2 text-sm text-zinc-600">
            Clean content layout for any project.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardPreview;