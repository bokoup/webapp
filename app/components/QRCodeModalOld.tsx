import { Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { type QRCodeData } from "~/routes/qrcode";
import { useEventSource } from "remix-utils";
import { redirect } from "@remix-run/server-runtime";

interface QRCodeModalProps {
  data: QRCodeData;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  secret?: string;
}

export const getQrCodePath = (
  text: string,
  title: string,
  description: string
): string => {
  let url = new URL("https://www.bokoup.dev/qrcode");
  url.searchParams.set("text", text);
  url.searchParams.set("title", title);
  url.searchParams.set("description", description);
  return `${url.pathname}${url.search}`;
};

export default function QRCodeModal({
  data,
  open,
  setOpen,
  secret,
}: QRCodeModalProps) {
  const cancelButtonRef = useRef(null);
  const signMemoItem = useEventSource(`/sse/signmemo`);

  useEffect(() => {
    if (secret) {
      if (signMemoItem) {
        setOpen(false);
        redirect("/");
      }
    }
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                {data ? (
                  <div className="flex flex-col bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <DevicePhoneMobileIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {data.title}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {data.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <img
                        src={data.dataUrl}
                        className="h-48 w-48"
                        alt="QR code"
                      />
                      <div className="absolute flex h-48 w-48 items-center justify-center">
                        <img
                          src="./images/logo-light.svg"
                          alt="bokoup logo"
                          className="p-1/2 h-8 w-8 rounded-full bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="rounded-full bg-bokoupDark2-100 px-6 py-2 font-semibold hover:brightness-90"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
