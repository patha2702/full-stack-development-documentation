import { notificationAtom } from "../atoms/notification";
import { selector } from "recoil";

export const totalNotificationCountSelector = selector({
  key: "totalNotificationCountSelector",
  get: ({ get }) => {
    const notificationsCount = get(notificationAtom);
    return notificationsCount.jobs + notificationsCount.network + notificationsCount.messaging + notificationsCount.notifications;
  },
});
