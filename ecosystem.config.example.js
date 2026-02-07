module.exports = {
  apps: [{
    name: 'chase-landing',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/chase-landing',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      DATABASE_URL: 'postgresql://username:password@host:port/database',
      NEXTAUTH_SECRET: 'your-nextauth-secret',
    }
  }]
};
