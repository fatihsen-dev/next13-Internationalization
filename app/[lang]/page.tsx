import Counter from "@/components/Counter";
import LangSwitcher from "@/components/LangSwitcher";
import { Locale } from "@/langs/config";
import { getDictionary } from "@/langs/getDictionary";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
   const dictionary = await getDictionary(lang);

   return (
      <div className="h-full flex justify-center items-center flex-col">
         <h2 className="text-4xl mb-10">{dictionary.server_component.welcome}</h2>
         <Counter dictionary={dictionary.counter} />
         <LangSwitcher />
      </div>
   );
}
