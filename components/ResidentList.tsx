"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

interface Resident {
  id: number;
  name: string;
  age: number;
  room: string;
}

const residents: Resident[] = [
  { id: 1, name: "John Doe", age: 75, room: "101" },
  { id: 2, name: "Jane Smith", age: 82, room: "102" },
  { id: 3, name: "Robert Johnson", age: 68, room: "103" },
  { id: 4, name: "Emily Brown", age: 79, room: "104" },
  { id: 5, name: "Michael Davis", age: 71, room: "105" },
]

export function ResidentList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredResidents = residents.filter(resident =>
    resident.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search residents..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredResidents.map((resident) => (
            <TableRow key={resident.id}>
              <TableCell>{resident.name}</TableCell>
              <TableCell>{resident.age}</TableCell>
              <TableCell>{resident.room}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}