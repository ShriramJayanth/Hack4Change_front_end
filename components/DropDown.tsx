"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Dropdown() {
  const [position, setPosition] = React.useState("Cpp")

  return (
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-blue-600 text-white" variant="outline">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Programming language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Cpp">Cpp</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Python">Python</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Java">Java</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
