import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{t("about")}</h1>
    </main>
  );
}
