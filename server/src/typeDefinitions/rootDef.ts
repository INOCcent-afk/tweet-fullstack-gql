import { gql } from "apollo-server";
import { tweetTypeDef } from "./tweet";
import { userTypeDef } from "./user";

export const rootTypeDefs = gql`
	type Query {
		users: [User!]!
		tweets: [Tweet!]!
	}

	${userTypeDef}
	${tweetTypeDef}
`;
