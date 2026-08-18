"use client";

import { useState } from "react";
import type { LoginFormBlock as LoginFormBlockType } from "@/lib/types";

export default function LoginFormBlock({
  block,
}: {
  block: LoginFormBlockType;
}) {
  const mode = block.mode ?? "login";
  const [tab, setTab] = useState<"login" | "register">(
    mode === "register" ? "register" : "login",
  );
  const showBoth = mode === "both";
  const active = showBoth ? tab : mode === "register" ? "register" : "login";

  return (
    <section className="mx-auto max-w-md rounded-3xl border border-sky-dark/25 bg-gradient-to-br from-sky-pale via-white to-sky-light px-8 py-10">
      {block.heading ? (
        <h2 className="section-heading text-center text-2xl">{block.heading}</h2>
      ) : null}
      {block.subheading ? (
        <p className="mt-3 text-center text-ink/70">{block.subheading}</p>
      ) : null}

      {showBoth ? (
        <div className="mt-6 flex rounded-full border border-sky-dark/25 bg-white p-1">
          <button
            type="button"
            onClick={() => setTab("login")}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
              tab === "login" ? "bg-trunk text-white" : "text-ink/70"
            }`}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => setTab("register")}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
              tab === "register" ? "bg-trunk text-white" : "text-ink/70"
            }`}
          >
            Register
          </button>
        </div>
      ) : null}

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {active === "register" ? (
          <label className="block text-sm font-medium text-ink">
            Name
            <input
              name="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 outline-none focus:border-sky-dark"
            />
          </label>
        ) : null}
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 outline-none focus:border-sky-dark"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Password
          <input
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 outline-none focus:border-sky-dark"
          />
        </label>
        {active === "login" && block.showRememberMe !== false ? (
          <label className="flex items-center gap-2 text-sm text-ink/70">
            <input type="checkbox" name="remember" className="rounded" />
            Remember me
          </label>
        ) : null}
        <button type="submit" className="btn-primary mt-2">
          {active === "login"
            ? block.loginButtonLabel || "Log in"
            : block.registerButtonLabel || "Create account"}
        </button>
        {active === "login" && block.showForgotPassword !== false ? (
          <a
            href="#"
            className="text-center text-sm text-ink/60 underline-offset-2 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </a>
        ) : null}
      </form>
    </section>
  );
}
