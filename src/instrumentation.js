export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.APP_ENV === "test") {
    const { mockServer } = await import("./mocks/node");
    mockServer.listen();
  }
}
