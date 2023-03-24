import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { rootTypeDefs } from "./typeDefinitions/rootDef";
import { Query } from "./resolvers";

export const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: rootTypeDefs,
	resolvers: { Query },
	context: async () => {
		return { prisma };
	},
});

server.listen().then(({ url }) => {
	console.log(`Server ready on ${url}`);
});
