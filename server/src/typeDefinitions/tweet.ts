import { gql } from "apollo-server";

export const tweetTypeDef = gql`
	type Tweet {
		id: ID!
		createdBy: User!
		tweet: String!
		retweetId: String
		retweetCount: Int!
		parentId: String
		tweets: [Tweet!]!
		likes: [Like!]!
	}

	type Like {
		id: ID!
		createdBy: User!
		tweets: [Tweet!]!
	}
`;
