import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "notificationSelector",
    get: async () => {
      await new Promise((res) =>
        setTimeout(() => {
          res("Resolved");
        }, 5000)
      );
      const res = await fetch("https://sum-server.100xdevs.com/notifications");
      return res.json();
    },
  }),
});
