"use client";
import { DataTable } from "@/components/homeComponent/homeTable";
import {
  columns,
  CountryRegionType,
} from "@/components/homeComponent/homeTable/columns";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { Search } from "lucide-react";
import dataSource from "../dataSource/dataSource.json";
import { useEffect, useMemo, useState } from "react";

const toLower = (str?: string) => {
  return str?.toLocaleLowerCase();
};

export default function Home() {
  const data: CountryRegionType[] = dataSource as CountryRegionType[];
  const [searchInput, setSearchInput] = useState("");

  const filterData = useMemo(() => {
    let searchInputLower = searchInput.toLocaleLowerCase();
    if (searchInputLower) {
      return data.filter((v) => {
        if (
          v.ISOAlpha2?.includes(searchInputLower) ||
          v.ISOAlpha3?.includes(searchInputLower) ||
          toLower(v.chineseshortname)?.includes(searchInputLower) ||
          toLower(v.englistshortname)?.includes(searchInputLower) ||
          v.numeric?.includes(searchInputLower) ||
          toLower(v.frenchshortname)?.includes(searchInputLower) ||
          v.calling?.includes(searchInputLower)
        ) {
          return true;
        }
        return false;
      });
    }

    return data;
  }, [searchInput, data]);

  const onInputChange = (e: any) => {
    setSearchInput(e?.target?.value);
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center w-screen">
          <div className="text-6xl font-bold p-6 tracking-wide">
            Country & Region
          </div>
          <div className="text-lg text-slate-500">
            Easy get Country & Region Code、ZIP Code and Other Code
          </div>

          <div className="flex items-center justify-center py-16">
            <div className="flex w-full max-w-lg  items-center space-x-2">
              <Input
                className="h-10 border-2"
                // value={searchInput}
                onChange={onInputChange}
                placeholder="place input country & region code、 ZIP code 、name"
              />
              <Button variant={"outline"} type="submit">
                <Search color="#000000" className="pr-2" /> Search{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <DataTable columns={columns} data={filterData} />
        </div>

        <div className="footer w-full">&nbsp;</div>
      </main>
    </>
  );
}
