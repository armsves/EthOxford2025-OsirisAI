import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Osiris AI</CardTitle>
          <CardDescription>Cross-Chain swaps using Vercel-AI and Lifi SDK</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose"> 
          <p className="mb-3 font-semibold">Test these prompts:</p>
          <ul className="flex flex-col mb-2">
          <li>→ get route from mantle to mantle for "MNT" to "USDC" for 5 MNT from my wallet</li>

          <li>→ Get the balance of the token USDC for my wallet 0x2Dd74fc5EC17C1141fce3a29BFc8416ebd9407Ee</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
