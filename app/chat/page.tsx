"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import io from "socket.io-client";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

interface User {
  id: string;
  name: string;
  avatar: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
    },
  ]);

  const handleNewMessage = (message:any) => {
    console.log(message);
  }

  useEffect(() => {
    // Socket.IO connection would go here
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
    socket.on('message', handleNewMessage);
    return () => {
      socket.disconnect()
    };
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "me",
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
    // socket.emit('message', message);
  };

  return (
    <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)] mt-4 px-4">
    {/* Users List */}
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-2">
            {users.map((user) => (
              <Button
                key={user.id}
                variant={selectedUser?.id === user.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedUser(user)}
              >
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>
                    {user.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {user.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>

    {/* Chat Area */}
    <Card className="col-span-9">
      <CardHeader>
        <CardTitle>
          {selectedUser ? `Chat with ${selectedUser.name}` : "Select a contact"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-16rem)] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  );
}