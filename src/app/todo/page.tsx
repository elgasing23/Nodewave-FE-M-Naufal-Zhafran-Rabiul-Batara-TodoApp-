"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Hello", completed: true },
    { id: 2, text: "This", completed: false },
    { id: 3, text: "Good", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const deleteSelected = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar di atas */}
      <Navbar />

      {/* Konten utama di tengah */}
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-lg shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-blue-800">To Do</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Input Tambah Task */}
            <div className="flex gap-2">
              <Input
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700">
                Add Todo
              </Button>
            </div>

            {/* Daftar Task */}
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <Label
                      className={`${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                    >
                      {task.text}
                    </Label>
                  </div>

                  {task.completed ? (
                    <CheckCircle className="text-green-500" />
                  ) : (
                    <XCircle
                      className="text-red-500 cursor-pointer"
                      onClick={() => deleteTask(task.id)}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              onClick={deleteSelected}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete Selected
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
