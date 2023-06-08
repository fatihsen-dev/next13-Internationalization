import { LangSwitchButton } from "./LangSwitchButton";

export const Header = ({ translate }: { translate: { header_text: string } }) => {
   return (
      <div className="flex justify-between items-center p-5">
         <p>{translate.header_text}</p>
         <LangSwitchButton />
      </div>
   );
};
