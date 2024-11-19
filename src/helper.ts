export const Helper = {
  getEnv: () => {
    return process.env.NODE_ENV;
  },
  getPort: () => {
    return process.env.PORT;
  },
  getDbUrl: () => {
    return process.env.DB_URL;
  },
  getHello: () => {
    return "Hello World";
  },
};
