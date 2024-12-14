import React from "react";
import { useForm, Head } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

export default function CreateUser() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        role: "User",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
















      ................................................
      
        e.preventDefault();
        post(route("users.store"));
    };

    return (
        <>
            <Head title="Create User" />
            <Card className="max-w-md mx-auto mt-10">
                <CardHeader>
                    <CardTitle>Create New User</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label>Name</label>
                            <Input
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                error={errors.name}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label>Email</label>
                            <Input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                error={errors.email}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label>Role</label>
                            <Select
                                value={data.role}
                                onValueChange={(value) =>
                                    setData("role", value)
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                    <SelectItem value="User">User</SelectItem>
                                    <SelectItem value="Editor">
                                        Editor
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.role && (
                                <p className="text-red-500 text-sm">
                                    {errors.role}
                                </p>
                            )}
                        </div>

                        <div>
                            <label>Password</label>
                            <Input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                error={errors.password}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <Input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                        >
                            {processing ? "Creating..." : "Create User"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
