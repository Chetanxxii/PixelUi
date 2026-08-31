export const cardCode = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

<Card>
  <CardHeader>
    <CardTitle>Pro Plan</CardTitle>
    <CardDescription>Perfect for developers.</CardDescription>
  </CardHeader>

  <CardContent>
    Content goes here.
  </CardContent>

  <CardFooter>
    Footer content
  </CardFooter>
</Card>`;

export const cardUsage = `import {
  Card,
  CardContent,
  CardTitle,
} from "../components/ui/Card";

export default function Demo() {
  return (
    <Card>
      <CardContent>
        <CardTitle>Pro Plan</CardTitle>
      </CardContent>
    </Card>
  );
}`;