

import { notificationAtom } from "./store/atoms/notification";
import { useRecoilValue } from "recoil";
import { totalNotificationCountSelector } from "./store/selectors/totalNotfications";

const App = () => {
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotfications = useRecoilValue(totalNotificationCountSelector)
  
  return (
    <div>
      <button>Home</button>

      <button>
        My Network
        {notificationCount.network > 0 && (
          <span>({notificationCount.network > 99 ? `99 +` : notificationCount.network})</span>
        )}
      </button>
      <button>
        Jobs
        {notificationCount.jobs > 0 && <span>({notificationCount.jobs > 99 ? `99 +` : notificationCount.jobs})</span>}
      </button>
      <button>
        Messages
        {notificationCount.messaging > 0 && (
          <span>({notificationCount.messaging > 99 ? `99 +` : notificationCount.messaging})</span>
        )}
      </button>
      <button>
        Notifications
        {notificationCount.notifications > 0 && (
          <span>({notificationCount.notifications > 99 ? `99 +` : notificationCount.notifications})</span>
        )}
      </button>

      <button>Me ({totalNotfications})</button>
    </div>
  );
};

export default App;
