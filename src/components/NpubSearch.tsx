import { ChangeEvent, FormEvent, useState } from "react";

interface NpubSearchProps {
  onSearch: (npub: string) => void;
}

export default function NpubSearch({ onSearch }: NpubSearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter npub..."
        className="px-4 py-2 border rounded mr-2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}
