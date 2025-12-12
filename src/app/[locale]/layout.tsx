import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  console.log(locale);

  const messages = (await import(`../../translations/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* <TopNav /> */}
      {children}
      {/* <Footer/> */}
    </NextIntlClientProvider>
  );
}
