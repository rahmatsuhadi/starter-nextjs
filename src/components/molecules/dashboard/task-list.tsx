import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
}

export function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        Belum ada task yang dibuat.
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {tasks.map((t) => (
        <Card key={t.id}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <h3 className="font-medium">{t.title}</h3>
              <p className="text-xs text-muted-foreground">
                Dibuat pada {new Date(t.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Badge variant={t.status === "todo" ? "outline" : "default"}>
              {t.status}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
