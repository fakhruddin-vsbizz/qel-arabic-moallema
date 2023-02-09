import React from "react";
import LetterDetails from "../layout/LetterDetails";

const AlphabatesDescription = [
  {
    name: "Alif",
    symbol: "ا",
    description: { initial: "أ", middle: "ـا", final: "ـا" },
    example: { initial: "أَخَذَ", middle: "سَأَلَ", final: "ذَرَأَ" },
  },
  {
    name: "Baa",
    symbol: "ب",
    description: { initial: "بـ", middle: "ـبـ", final: "ـب" },
    example: { initial: "بَدَأَ", middle: "نَبَذَ", final: "ثَقَبَ" },
  },
  {
    name: "Taa",
    symbol: "ت",
    description: { initial: "تـ", middle: "ـتـ", final: "ـت" },
    example: { initial: "تَرَكَ", middle: "فَتَحَ", final: "بَعَثَ" },
  },
  {
    name: "Thaa",
    symbol: "ث",
    description: { initial: "ثـ", middle: "ـثـ", final: "ـث" },
    example: { initial: "ثَبَتَ", middle: "مَثَلَ", final: "بَعَثَ" },
  },
  {
    name: "Jeem",
    symbol: "ج",
    description: { initial: "جـ", middle: "ـجـ", final: "ـج" },
    example: { initial: "جَمَعَ", middle: "وَجَدَ", final: "مَرَجَ" },
  },
  {
    name: "Haa",
    symbol: "ح",
    description: { initial: "حـ", middle: "ـحـ", final: "ـح" },
    example: { initial: "حَمَلَ", middle: "أَحَدَ", final: "شَرَحَ" },
  },
  {
    name: "Haa",
    symbol: "ح",
    description: { initial: "حـ", middle: "ـحـ", final: "ـح" },
    example: { initial: "حَمَلَ", middle: "أَحَدَ", final: "شَرَحَ" },
  },
  {
    name: "Khaa",
    symbol: "خ",
    description: { initial: "خــ", middle: "ـخـ", final: "ـخ" },
    example: { initial: "خَتَمَ", middle: "دَخَلَ", final: "صَرَخَ" },
  },
  {
    name: "Dal",
    symbol: "د",
    description: { initial: "د", middle: "ـد", final: "ـد" },
    example: { initial: "دَخَلَ", middle: "صَدَقَ", final: "حَسَدَ" },
  },
  {
    name: "Dhaal",
    symbol: "ذ",
    description: { initial: "ذ", middle: "ـذ", final: "ـذ" },
    example: { initial: "ذَهَبَ", middle: "كَذَبَ", final: "نَبَذَ" },
  },
  {
    name: "Raa",
    symbol: "ر",
    description: { initial: "ر", middle: "ـر", final: "ـر" },
    example: { initial: "رَجَعَ", middle: "تَرَكَ", final: "حَضَرَ" },
  },
  {
    name: "Zai",
    symbol: "ز",
    description: { initial: "ز", middle: "ـز", final: "ـز" },
    example: { initial: "زَعَمَ", middle: "عَزَمَ", final: "بَرَزَ" },
  },
  {
    name: "Seen",
    symbol: "س",
    description: { initial: "ســ", middle: "ـسـ", final: "ـس" },
    example: { initial: "سَرَقَ", middle: "كَسَبَ", final: "عَبَسَ" },
  },
  {
    name: "Sheen",
    symbol: "ش",
    description: { initial: "شـ", middle: "ـشـ", final: "ـش" },
    example: { initial: "شَكَرَ", middle: "كَشَفَ", final: "بَطَشَ" },
  },
  {
    name: "Saad",
    symbol: "ص",
    description: { initial: "صــ", middle: "ـصـ", final: "ـص" },
    example: { initial: "صَدَقَ", middle: "فَصَلَ", final: "نَكَصَ" },
  },
  {
    name: "Daad",
    symbol: "ض",
    description: { initial: "ضـ", middle: "ـضـ", final: "ـض" },
    example: { initial: "ضَرَبَ", middle: "حَضَرَ", final: "فَرَضَ" },
  },
  {
    name: "Taa",
    symbol: "ط",
    description: { initial: "طــ", middle: "ـطـ", final: "ـط" },
    example: { initial: "طَبَعَ", middle: "فَطَرَ", final: "بَسَطَ" },
  },
  {
    name: "Dhaa",
    symbol: "ظ",
    description: { initial: "ظـ", middle: "ـظـ", final: "ـظ" },
    example: { initial: "ظَلَمَ", middle: "نَظَرَ", final: "وَعَظَ" },
  },
  {
    name: "Ayn",
    symbol: "ع",
    description: { initial: "عــ", middle: "ـعـ", final: "ـع" },
    example: { initial: "عَبَدَ", middle: "جَعَلَ", final: "خَضَعَ" },
  },
  {
    name: "Ghayn",
    symbol: "غ",
    description: { initial: "غـ", middle: "ـغـ", final: "ـغ" },
    example: { initial: "غَفَرَ", middle: "فَغَفَرَ", final: "نَزَغَ" },
  },
  {
    name: "Faa",
    symbol: "ف",
    description: { initial: "فـ", middle: "ـفـ", final: "ـف" },
    example: { initial: "فَصَلَ", middle: "أَفَلَ", final: "صَرَفَ" },
  },
  {
    name: "Qaaf",
    symbol: "ق",
    description: { initial: "قـ", middle: "ـقـ", final: "ـق" },
    example: { initial: "قَطَعَ", middle: "تَقَعَ", final: "أَبَقَ" },
  },
  {
    name: "Kaaf",
    symbol: "ك",
    description: { initial: "كـ", middle: "ـكـ", final: "ـكَ" },
    example: { initial: "كَتَبَ", middle: "أَكَلَ", final: "تَرَكَ" },
  },
  {
    name: "Laam",
    symbol: "ل",
    description: { initial: "لـ", middle: "ـلـ", final: "ـل" },
    example: { initial: "لَعَنَ", middle: "سَلَفَ", final: "نَزَلَ" },
  },
  {
    name: "Meem",
    symbol: "م",
    description: { initial: "مـ", middle: "ـمـ", final: "ـم" },
    example: { initial: "حَكَمَ", middle: "أَمَرَ", final: "مَنَعَ" },
  },
  {
    name: "Noon",
    symbol: "ن",
    description: { initial: "نـ", middle: "ـنـ", final: "ـن" },
    example: { initial: "نَبَذَ", middle: "مَنَعَ", final: "سَكَنَ" },
  },
  {
    name: "Haa",
    symbol: "هـ",
    description: { initial: "هـ", middle: "ـهـ", final: "ـه" },
    example: { initial: "هَلَكَ", middle: "جَهَرَ", final: "سَكَنَ" },
  },
  {
    name: "Waaw",
    symbol: "و",
    description: { initial: "و", middle: "ـو", final: "ـو" },
    example: { initial: "وَسَقَ", middle: "فَوَهَبَ", final: "سَكَنَ" },
  },
  {
    name: "Yaa",
    symbol: "ي",
    description: { initial: "يـ", middle: "ـيـ", final: "ـي" },
    example: { initial: "يَدَكَ", middle: "وَيَذَرَكَ", final: "سَكَنَ" },
  },
];

const ActivityDetail = ({ id }) => {
  console.log(id);
  const filteredData = AlphabatesDescription.filter((item) => item.name === id);
  console.log(filteredData[0].description);

  return (
    <>
      <LetterDetails
        name={filteredData[0].name}
        symbol={filteredData[0].symbol}
        initial={filteredData[0].description.initial}
        middle={filteredData[0].description.middle}
        final={filteredData[0].description.final}
        exInitial={filteredData[0].example.initial}
        exMiddle={filteredData[0].example.middle}
        exFinal={filteredData[0].example.final}
      />
    </>
  );
};

export default ActivityDetail;
