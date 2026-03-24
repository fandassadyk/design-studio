"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const FORMSPREE_FORM_ID = "mojpavzg";

// Formats up to 10 local digits into +7 (XXX) XXX-XX-XX
function formatPhone(digits: string): string {
  const d = digits.slice(0, 10);
  if (d.length === 0) return "";
  let r = "+7 (";
  r += d.slice(0, Math.min(3, d.length));
  if (d.length > 3) r += ") " + d.slice(3, Math.min(6, d.length));
  if (d.length > 6) r += "-" + d.slice(6, Math.min(8, d.length));
  if (d.length > 8) r += "-" + d.slice(8, 10);
  return r;
}

function localDigits(formatted: string): string {
  const d = formatted.replace(/\D/g, "");
  return d.startsWith("7") ? d.slice(1) : d;
}

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");
    // Strip leading 7/8 so user doesn't have to skip the country code
    if (digits.startsWith("7") || digits.startsWith("8")) digits = digits.slice(1);
    setPhone(formatPhone(digits));
    setPhoneError("");
  };

  const handlePhoneBlur = () => {
    const ld = localDigits(phone);
    if (ld.length > 0 && ld.length < 10)
      setPhoneError("Введите полный номер: +7 (XXX) XXX-XX-XX");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Block non-ASCII and characters that can't appear in an email address
    setEmail(e.target.value.replace(/[^a-zA-Z0-9@._\-+]/g, ""));
    setEmailError("");
  };

  const handleEmailBlur = () => {
    if (email && !EMAIL_RE.test(email))
      setEmailError("Введите корректный email, например: ivan@agency.ru");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let hasError = false;
    if (localDigits(phone).length < 10) {
      setPhoneError("Введите полный номер: +7 (XXX) XXX-XX-XX");
      hasError = true;
    }
    if (!EMAIL_RE.test(email)) {
      setEmailError("Введите корректный email, например: ivan@agency.ru");
      hasError = true;
    }
    if (hasError) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center gap-5 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/15">
          <CheckCircle2 className="size-7 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-sm text-zinc-400">
            Свяжемся с вами в течение рабочего дня. Обычно быстрее.
          </p>
        </div>
      </div>
    );
  }

  const inputCls = cn(
    "h-11 rounded-xl border-zinc-700 bg-zinc-900/80 text-white placeholder:text-zinc-600",
    "focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20",
    "hover:border-zinc-600 transition-colors"
  );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-widest text-zinc-500"
          >
            Имя <span className="text-indigo-400">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Иван Петров"
            className={inputCls}
          />
          <ValidationError
            field="name"
            prefix="Имя"
            errors={state.errors}
            className="text-xs text-red-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-widest text-zinc-500"
          >
            Телефон <span className="text-indigo-400">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
            placeholder="+7 (900) 000-00-00"
            className={cn(inputCls, phoneError && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
          />
          {phoneError && (
            <p className="text-xs text-red-400">{phoneError}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-widest text-zinc-500"
        >
          Email <span className="text-indigo-400">*</span>
        </label>
        <Input
          id="email"
          name="email"
          required
          type="text"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          placeholder="ivan@agency.ru"
          className={cn(inputCls, emailError && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
        />
        {emailError && (
          <p className="text-xs text-red-400">{emailError}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="comment"
          className="text-xs font-semibold uppercase tracking-widest text-zinc-500"
        >
          Комментарий
        </label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Расскажите о задаче: тип проекта, объём, сроки..."
          rows={4}
          className={cn(
            "w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-3.5 py-3",
            "text-sm text-white placeholder:text-zinc-600 outline-none resize-none",
            "focus-visible:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20",
            "hover:border-zinc-600 transition-colors"
          )}
        />
        <ValidationError
          field="comment"
          prefix="Комментарий"
          errors={state.errors}
          className="text-xs text-red-400"
        />
      </div>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
          <AlertCircle className="size-4 shrink-0 text-red-400" />
          <p className="text-xs text-red-400">
            Произошла ошибка при отправке. Попробуйте ещё раз.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={state.submitting}
        className="h-11 w-full rounded-xl bg-indigo-500 hover:bg-indigo-400 border-0 text-white font-semibold text-sm gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            Отправить заявку
            <Send className="size-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-zinc-600 text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
