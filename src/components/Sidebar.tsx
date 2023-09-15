import { Wand2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { VideoInputForm } from "./VideoInputForm";
import { PromptSelect } from "./PromptSelect";
import { Dispatch } from "react";

interface SidebarProps {
  onPromptSelected: (template: string) => void;
  setVideoId: Dispatch<React.SetStateAction<string | null>>;
  temperature: number;
  setTemperature: (number: number) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
}

export function Sidebar({
  onPromptSelected,
  setVideoId,
  temperature,
  setTemperature,
  handleSubmit,
  disabled,
}: SidebarProps) {
  return (
    <aside className="w-80 space-y-6">
      <VideoInputForm onVideoUploaded={setVideoId} />
      <Separator />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label>Prompt</Label>
          <PromptSelect onPromptSelected={onPromptSelected} />
        </div>
        <div className="space-y-2">
          <Label>Modelo</Label>
          <Select disabled defaultValue="gpt3.5">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
            </SelectContent>
          </Select>
          <span className="block text-xs text-muted-foreground italic">
            Você poderá customizar essa opção em breve
          </span>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label>Temperatura</Label>
          <Slider
            min={0}
            max={1}
            step={0.1}
            value={[temperature]}
            onValueChange={(value) => setTemperature(value[0])}
          />
          <span className="block text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem a deixar o resultado mais criativo e com
            possíveis erros
          </span>
        </div>

        <Separator />

        <Button type="submit" className="w-full" disabled={disabled}>
          Executar <Wand2 className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </aside>
  );
}
