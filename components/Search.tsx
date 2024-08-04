"use client";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"

type SearchProps = {
  onSearch: (searchTerm: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    onSearch(query);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }

  return (
    <div className="flex w-full max-w-xl -mt-10 mb-2 md:mb-0 md:mt-0 items-center space-x-2">
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center space-x-2">
      <Input 
        className="bg-transparent text-white text-sm md:text-base"
        name="query"
        type="text"
        placeholder="search any topic..."
        onChange={handleInputChange}
      />
      <Button className="bg-[#756EF4] hover:bg-[#847fe1]" type="submit">Search</Button>
    </form>
    </div>
  )
}