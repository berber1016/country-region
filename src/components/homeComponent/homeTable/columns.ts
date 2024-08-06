"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CountryRegionType = {
  id: string;
  fullName?: string;
  chineseshortname?: string;
  englistshortname?: string;
  frenchshortname?: string;
  ISOAlpha2?: string;
  ISOAlpha3?: string;
  numeric?: string;
  calling?: string;
};

export const columns: ColumnDef<CountryRegionType>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  // {
  //   accessorKey: "fullName",
  //   header: "Full Name",
  // },
  {
    accessorKey: "chineseshortname",
    header: "Chinese Short Name",
  },
  {
    accessorKey: "englistshortname",
    header: "English Short Name",
  },
  {
    accessorKey: "frenchshortname",
    header: "French Short Name",
  },
  {
    accessorKey: "ISOAlpha2",
    header: "Alpha-2 Code",
  },
  {
    accessorKey: "ISOAlpha3",
    header: "Alpha-3 Code",
  },
  {
    accessorKey: "numeric",
    header: "Numeric Code",
  },
  {
    accessorKey: "calling",
    header: "Calling Code",
  },
];
