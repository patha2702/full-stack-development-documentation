const axios = require("axios");

async function main() {
  const res = await axios.post(
    "https://httpdump.app/dumps/83f38692-5d4f-4c1e-88ce-562bbeb6313b",
    { username: "Marcel", password: "supersecret", "this is a": "test" },
    {
      headers: {
        Authorization: "Bearer 123", // Ensure the format is correct
      },
    }
  );
  console.log(res?.data);
}

main().catch((error) => {
  console.error("Error:", error);
});
