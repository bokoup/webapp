import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  GiftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

interface LogoutMenuProps {
  userId: string;
  merchantId: string | undefined;
}

export default function LogoutMenu(props: LogoutMenuProps) {
  return (
    <Menu as="div" className="relative my-auto inline-block bg-white text-left">
      <Menu.Button className="pt-1">
        <UserCircleIcon className="h-8 w-8 text-bokoupBlue-500" />
      </Menu.Button>
      <Menu.Items className=" absolute right-0 z-50 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item
          as="div"
          className="w-full rounded-b-md p-1 ui-active:bg-bokoupBlue-100 ui-not-active:bg-white"
        >
          {({ close }) => (
            <Link to={`/promos`} onClick={close}>
              <div className="flex items-center gap-2">
                <BanknotesIcon className="h-4 w-4" />
                <span>My Promos</span>
              </div>
            </Link>
          )}
        </Menu.Item>
        {props.merchantId ? (
          <Menu.Item
            as="div"
            className="w-full rounded-b-md p-1 ui-active:bg-bokoupBlue-100 ui-not-active:bg-white"
          >
            {({ close }) => (
              <Link to={`/merchants/${props.merchantId}`} onClick={close}>
                <div className="flex items-center gap-2">
                  <BuildingStorefrontIcon className="h-4 w-4" />
                  <span>My Merchant</span>
                </div>
              </Link>
            )}
          </Menu.Item>
        ) : null}
        <Menu.Item
          as="div"
          className="w-full rounded-b-md p-1 ui-active:bg-bokoupBlue-100 ui-not-active:bg-white"
        >
          <Link to={`/logout`}>
            <div className="flex items-center gap-2">
              <ArrowRightOnRectangleIcon className="h-4 w-4" />
              <span>Log out</span>
            </div>
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
