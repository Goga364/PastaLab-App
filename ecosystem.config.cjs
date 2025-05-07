require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'PastaLab-App',
      script: 'npm',
      args: 'run dev -- --host',
      env: {
        VITE_TERMINAL_GROUP_ID: process.env.VITE_TERMINAL_GROUP_ID,
        VITE_ORGANIZATION_ID: process.env.VITE_ORGANIZATION_ID,
        VITE_SYVRE_API_KEY: process.env.VITE_SYVRE_API_KEY
      }
    }
  ]
};
