import { useState, type FormEvent } from "react";
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
import logo from "@/assets/logo.png";
import { RegistrationText } from "@/mock/data";

const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL as string | undefined;

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
    plan: "standard",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (SHEETS_URL) {
        const params = new URLSearchParams({
          name: form.name,
          phone: form.phone,
          email: form.email,
          plan: form.plan,
          date: new Date().toISOString(),
        });
        await fetch(SHEETS_URL, { method: "POST", body: params, mode: "no-cors" });
      }
      toast.success("Arizangiz qabul qilindi!", {
        description: "24 soat ichida siz bilan bog'lanamiz.",
      });
      onOpenChange(false);
      setForm(() => ({ name: "", phone: "", email: "", plan: "standard" }));
    } catch {
      toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card-strong border-white/10 sm:max-w-md rounded-3xl">
        <DialogHeader>
          <div className="mx-auto mb-2 size-12 rounded-2xl overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <DialogTitle className="text-2xl text-center font-bold tracking-tight">
            <span className="text-gradient">{RegistrationText.title}</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            {RegistrationText.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs">
              {RegistrationText.nameLabel}
            </Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Sardor Ahmedov"
              className="bg-white/5 border-white/10 rounded-xl h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs">
              {RegistrationText.phoneLabel}
            </Label>
            <Input
              id="phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="+998 90 123 45 67"
              className="bg-white/5 border-white/10 rounded-xl h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">
              {RegistrationText.emailLabel}
            </Label>
            <Input
              id="email"
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="email@example.com"
              className="bg-white/5 border-white/10 rounded-xl h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">{RegistrationText.planLabel}</Label>
            <Select
              value={form.plan}
              onValueChange={(v) => setForm((prev) => ({ ...prev, plan: v }))}
            >
              <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {RegistrationText.plans.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label} — {p.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-12 rounded-2xl bg-linear-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-[0_10px_30px_-10px_oklch(0.68_0.20_254/0.7)] hover:opacity-95"
          >
            {submitting ? "Yuborilmoqda..." : RegistrationText.submitButtonText}
          </Button>

          <p className="text-xs text-center text-muted-foreground">{RegistrationText.disclaimer}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
