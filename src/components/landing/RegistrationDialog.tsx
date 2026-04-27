import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationDialog({ open, onOpenChange }: RegistrationDialogProps) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "pro",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Frontend-only — real backend keyinroq Lovable Cloud bilan ulanadi
    console.log("Registration:", form);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Arizangiz qabul qilindi!", {
      description: "24 soat ichida siz bilan bog'lanamiz.",
    });
    onOpenChange(false);
    setForm({ name: "", phone: "", email: "", plan: "pro" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card-strong border-white/10 sm:max-w-md rounded-3xl">
        <DialogHeader>
          <div className="mx-auto mb-2 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_24px_-4px_oklch(0.68_0.20_254/0.7)]">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <DialogTitle className="text-2xl text-center font-bold tracking-tight">
            <span className="text-gradient">Joyingizni band qiling</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Ma'lumotlaringizni qoldiring — 24 soat ichida bog'lanamiz.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs">Ism Familiya</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Sardor Ahmedov"
              className="bg-white/5 border-white/10 rounded-xl h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs">Telefon raqam</Label>
            <Input
              id="phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+998 90 123 45 67"
              className="bg-white/5 border-white/10 rounded-xl h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">Email</Label>
            <Input
              id="email"
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="email@example.com"
              className="bg-white/5 border-white/10 rounded-xl h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Tarif</Label>
            <Select value={form.plan} onValueChange={(v) => setForm({ ...form, plan: v })}>
              <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard — 1,200,000 so'm</SelectItem>
                <SelectItem value="pro">Pro — 2,400,000 so'm</SelectItem>
                <SelectItem value="consultation">Bepul konsultatsiya</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-[0_10px_30px_-10px_oklch(0.68_0.20_254/0.7)] hover:opacity-95"
          >
            {submitting ? "Yuborilmoqda..." : "Joyni Band Qilish"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Yuborish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
