import { Github } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 🤎 por Felipe Ribeiro
        </span>
        <Separator orientation="vertical" className="h-6" />
        <Button variant={"outline"}>
          <Github className="h-4 w-4 mr-2" /> Github
        </Button>
      </div>
    </div>
  );
}
