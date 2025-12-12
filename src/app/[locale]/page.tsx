import { useTranslations } from "next-intl";

export default function Home({ children }: { children: React.ReactNode }) {
  const t = useTranslations();

  return (
    <div>
      <h1 className="text-3xl font-bold">{t("home")}</h1>
    </div>
  );
}
