// import { handleAuth } from '@auth0/nextjs-auth0';

// export default handleAuth();

import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      //returnTo: returnToPath,
      authorizationParams: {
        ui_locales: 'ja',
      },
    });
  },
});





