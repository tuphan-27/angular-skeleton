import { provideStore } from '@ngxs/store';
import { environment } from '@environment';

import { UserState } from './user/user.state';

const APP_STORE = provideStore([UserState], { developmentMode: !environment.isProduction });

export default APP_STORE;
