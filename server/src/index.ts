import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";

export const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: undefined,
	resolvers: {},
});

server.listen().then(({ url }) => {
	console.log(`Server ready on ${url}`);
});
