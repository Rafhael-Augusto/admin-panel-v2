import { DeleteAccountModal, EditProfileModal } from "@/components/modals";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toUpperCaseFirst } from "@/utils/stringUtils";
import {
  Bell,
  Eye,
  Globe,
  LockIcon,
  Mail,
  MessagesSquare,
  ShoppingCart,
  Sun,
  TrashIcon,
  TriangleAlert,
  User,
} from "lucide-react";

export function SettingsContent() {
  const userInfo = {
    username: "Rafhael",
    email: "Rafhael@gmail.com",
    role: "admin",
    account: "verified",
  };

  return (
    <>
      <div className="h-full px-5">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <User />
                  <h2 className="text-2xl font-bold">User Profile</h2>
                </div>
                <p className="text-gray-500 text-sm">
                  Basic information of your account
                </p>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex gap-4 items-center">
                <User
                  size={80}
                  className="bg-gray-200 rounded-full p-2 text-blue-800"
                />

                <div className="flex flex-col w-full">
                  <span className="text-xl font-bold">{userInfo.username}</span>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{userInfo.email}</span>
                    <Button variant={"outline"} className="cursor-pointer">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>

              <div className="ml-24 flex gap-4">
                <Badge variant={"outline"}>
                  {toUpperCaseFirst(userInfo.role)}
                </Badge>
                <Badge
                  variant={"outline"}
                  className={`${userInfo.account === "verified" ? "text-green-500" : "text-red-600"} font-bold`}
                >
                  Account {userInfo.account}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="my-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-2 items-center">
                      <Sun />
                      <h2 className="text-xl">Appearance</h2>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Personalize the interface appearance
                    </p>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">Dark mode</span>
                    <span>Enable dark theme to reduce eye strain</span>
                  </div>

                  <Switch className="cursor-pointer" />
                </CardContent>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-2 items-center">
                      <Globe />
                      <h2 className="text-xl">Language & region</h2>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Set language and regional preferences
                    </p>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div>
                    <span className="text-lg font-bold">
                      Interface language
                    </span>

                    <div className="my-2">
                      <Select>
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Language</SelectLabel>

                            <SelectItem value="portuguese">
                              🇧🇷 Português (Brasil)
                            </SelectItem>
                            <SelectItem value="english">
                              🇺🇸 English (US)
                            </SelectItem>
                            <SelectItem value="spanish">🇪🇸 Español</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <span className="text-lg font-bold">Currency format</span>

                    <div className="my-2">
                      <Select>
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Currency format</SelectLabel>

                            <SelectItem value="real">
                              R$ Real Brasileiro
                            </SelectItem>
                            <SelectItem value="dollar">
                              $ American Dollar
                            </SelectItem>
                            <SelectItem value="euro">€ Euro</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <span className="text-lg font-bold">Data Format</span>

                    <div className="my-2">
                      <Select>
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Data format</SelectLabel>

                            <SelectItem value="dma">DD/MM/AAAA</SelectItem>
                            <SelectItem value="mda">MM/DD/AAAA</SelectItem>
                            <SelectItem value="amd">AAAA/MM/DD</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="my-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-2 items-center">
                      <Bell />
                      <h2 className="text-xl">Notifications</h2>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Set up how and when to receive notifications
                    </p>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="flex gap-2 items-center">
                        <Mail />
                        <span className="text-xl font-semibold">
                          Notifications by email
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Receive important updates by email
                      </p>
                    </div>
                    <Switch className="cursor-pointer" />
                  </div>

                  <div className="flex justify-between items-center my-4">
                    <div>
                      <div className="flex gap-2 items-center">
                        <ShoppingCart />
                        <span className="text-xl font-semibold">
                          New orders
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Notify about new orders
                      </p>
                    </div>
                    <Switch className="cursor-pointer" />
                  </div>

                  <div className="flex justify-between items-center my-4">
                    <div>
                      <div className="flex gap-2 items-center">
                        <MessagesSquare />
                        <span className="text-xl font-semibold">
                          Customer messages
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Notify about new support messages
                      </p>
                    </div>
                    <Switch className="cursor-pointer" />
                  </div>

                  <div>
                    <span className="text-lg font-bold">Report frequency</span>

                    <div className="my-2">
                      <Select>
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Frequency</SelectLabel>

                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="montly">Montly</SelectItem>
                            <SelectItem value="never">Never</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-2 items-center">
                      <LockIcon />
                      <h2 className="text-xl">Security</h2>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Manage your password and security settings
                    </p>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <form>
                    <div className="my-2">
                      <Label className="text-xl mb-1" htmlFor="currentPassword">
                        Current password
                      </Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          placeholder="Type your current password"
                        />

                        <Button
                          type="button"
                          variant={"ghost"}
                          className="absolute top-0 right-0 cursor-pointer"
                        >
                          <Eye />
                        </Button>
                      </div>
                    </div>

                    <div className="my-2">
                      <Label className="text-xl mb-1" htmlFor="newpassword">
                        New password
                      </Label>
                      <div className="relative">
                        <Input
                          id="newpassword"
                          placeholder="Type your current password"
                        />

                        <Button
                          type="button"
                          variant={"ghost"}
                          className="absolute top-0 right-0 cursor-pointer"
                        >
                          <Eye />
                        </Button>
                      </div>
                    </div>

                    <div className="my-2">
                      <Label
                        className="text-xl mb-1"
                        htmlFor="confirmnewpassword"
                      >
                        Confirm new password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmnewpassword"
                          placeholder="Type your current password"
                        />

                        <Button
                          type="button"
                          variant={"ghost"}
                          className="absolute top-0 right-0 cursor-pointer"
                        >
                          <Eye />
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full mt-4 cursor-pointer">
                      Change password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="my-8">
          <Card className="bg-red-100">
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 [&>*]:text-red-600">
                  <TriangleAlert />
                  <h3 className="text-xl">Delete account</h3>
                </div>
                <p className="text-xl text-red-600">
                  Permanently delete your account and all data
                </p>
              </div>

              <Button variant={"destructive"} className="cursor-pointer">
                <TrashIcon />
                Delete account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <EditProfileModal />
      <DeleteAccountModal />
    </>
  );
}
