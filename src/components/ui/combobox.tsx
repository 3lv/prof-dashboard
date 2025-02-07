"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

interface ComboboxProps {
  options: { unit: string; items: { value: string; label: string }[] }[]
  onValuesChange: (values: string[]) => void
  values: string[]
  placeholder?: string
  disabled?: boolean
}

export function Combobox({ options, onValuesChange, values, placeholder, disabled }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (currentValue: string) => {
    const newValues = values.includes(currentValue)
      ? values.filter((value) => value !== currentValue)
      : [...values, currentValue]
    onValuesChange(newValues)
  }

  const handleRemove = (valueToRemove: string) => {
    onValuesChange(values.filter((value) => value !== valueToRemove))
  }

  const allItems = options.flatMap((group) => group.items)

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            disabled={disabled}
          >
            <span className="truncate">
              {values.length > 0
                ? `${values.length} item${values.length === 1 ? "" : "s"} selected`
                : placeholder || "Select options..."}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search option..." />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              {options.length === 0 ? (
                <CommandItem disabled>No options available</CommandItem>
              ) : (
                options.map((group, index) => (
                  <React.Fragment key={group.unit}>
                    {index > 0 && <CommandSeparator />}
                    <CommandGroup heading={group.unit}>
                      {group.items.map((item) => (
                        <CommandItem key={item.value} onSelect={() => handleSelect(item.value)}>
                          <Check
                            className={cn("mr-2 h-4 w-4", values.includes(item.value) ? "opacity-100" : "opacity-0")}
                          />
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </React.Fragment>
                ))
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {values.length > 0 && (
        <div className="border rounded-md p-2 space-y-1">
          {values.map((value) => {
            const item = allItems.find((item) => item.value === value)
            if (!item) return null
            return (
              <Badge
                key={value}
		variant="secondary"
		className="mr-2"
              >
                <span className="truncate">{item.label}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-5 w-5 p-0 opacity-70 hover:opacity-100 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleRemove(value)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )
          })}
        </div>
      )}
    </div>
  )
}
