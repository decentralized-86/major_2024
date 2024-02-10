import { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import "./Header.css"; // Importing external CSS file
import logo from "../Header/Logo/2.png";

// Utility function to conditionally concatenate CSS classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Example list of notifications
const notifications = [
  { id: 1, text: "New message from John" },
  { id: 2, text: "You have a meeting at 3:00 PM" },
  { id: 3, text: "Reminder: Complete task by EOD" },
];

// Navbar component
export default function Navbar() {
  // State for managing visibility of notification dropdown
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-8xl mx-2 px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 w-auto">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-9 w-auto"
                    src={logo}
                    alt="CPMS"
                  />
                  <img
                    className="hidden lg:block h-9 w-auto"
                    src={logo}
                    alt="CPMS"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notifications button */}
                <button
                  type="button"
                  className="notifications-button"
                  onClick={() => setOpenNotifications(!openNotifications)}
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="profile-dropdown-button">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="profile-image"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="IMG"
                      />
                    </Menu.Button>
                  </div>
                  {/* Transition for profile dropdown menu */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="profile-dropdown-menu">
                      {/* Profile dropdown menu items */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              "profile-dropdown-item",
                              active && "active"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              "profile-dropdown-item",
                              active && "active"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              "profile-dropdown-item",
                              active && "active"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Notification dropdown */}
          {openNotifications && (
            <div className="absolute right-0 mt-2 origin-top-left bg-white shadow-lg rounded-md overflow-hidden z-10">
              <div className="py-1">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {notification.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}
