import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();
  if (request.method === "GET") {
    const character = {
      firstName: chance.first(),
      lastName: chance.last(),
    };
    response.status(200).json(character);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
