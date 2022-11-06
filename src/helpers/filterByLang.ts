import { ILangEs } from "../Interfaces/IElements";

export function filterElementsByLang({
  data,
  number,
}: {
  data: ILangEs[] | null;
  number: number;
}) {
  return data?.filter((el) => el.atomicNumber === number)[0];
}
