import React, { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/Components/ui/dropdown-menu";
import { Checkbox } from "@/Components/ui/checkbox";
import { MoreHorizontal, Plus } from 'lucide-react';

export default function UsersIndex() {
  const { users, filters } = usePage().props;
  const [searchTerm, setSearchTerm] = useState(filters.search || "");
  const [selectedColumns, setSelectedColumns] = useState(["name", "email", "role"]);
  const [selectedRole, setSelectedRole] = useState(filters.role || "All");

  const handleSearch = () => {
    router.get('/users', { 
      search: searchTerm, 
      role: selectedRole 
    }, { 
      preserveState: true 
    });
  };

  const handleDelete = (id) => {
    router.delete(`/users/${id}`);
  };

  return (
    <>
      <Head title="Users Management" />
      <div>
        <h1 className="text-3xl font-semibold mb-6">Users Management</h1>
        <div className="mb-4 flex justify-between items-center">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="max-w-sm"
          />
          <Button onClick={() => router.get('/users/create')}>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>
        <div className="mb-4 flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Columns</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["name", "email", "role"].map((column) => (
                <DropdownMenuItem key={column}>
                  <Checkbox
                    checked={selectedColumns.includes(column)}
                    onCheckedChange={(checked) => {
                      setSelectedColumns(
                        checked
                          ? [...selectedColumns, column]
                          : selectedColumns.filter((c) => c !== column)
                      )
                    }}
                  />
                  <span className="ml-2">{column.charAt(0).toUpperCase() + column.slice(1)}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter Role: {selectedRole}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => {
                setSelectedRole("All");
                handleSearch();
              }}>All</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                setSelectedRole("Admin");
                handleSearch();
              }}>Admin</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                setSelectedRole("User");
                handleSearch();
              }}>User</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                setSelectedRole("Editor");
                handleSearch();
              }}>Editor</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              {selectedColumns.includes("name") && <TableHead>Name</TableHead>}
              {selectedColumns.includes("email") && <TableHead>Email</TableHead>}
              {selectedColumns.includes("role") && <TableHead>Role</TableHead>}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                {selectedColumns.includes("name") && <TableCell>{user.name}</TableCell>}
                {selectedColumns.includes("email") && <TableCell>{user.email}</TableCell>}
                {selectedColumns.includes("role") && <TableCell>{user.role}</TableCell>}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem 
                        onClick={() => router.get(`/users/${user.id}/edit`)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}