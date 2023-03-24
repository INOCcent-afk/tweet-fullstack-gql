import { Context } from "../models/global";

export const Query = {
	users: async (_: any, __: any, { prisma }: Context) => {
		return prisma.user.findMany();
	},
	tweets: async (_: any, __: any, { prisma }: Context) => {
		return prisma.tweet.findMany();
	},
};
