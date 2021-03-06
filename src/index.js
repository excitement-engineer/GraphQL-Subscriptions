// @flow
/**
 * Copyright (c) 2017, Dirk-Jan Rutten
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import server from "./server";
import { PORT } from "./config";
import createSubscriptionServer from "./subscriptionServer";

server.listen(PORT, () => {
  createSubscriptionServer(server);
  console.log(`Server running on port ${PORT}.`);
});
