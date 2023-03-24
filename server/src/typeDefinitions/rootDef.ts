import { gql } from "apollo-server";

export const rootTypeDefs = gql`
	type Query {
		users: [User!]!
		tweets: [Tweet!]!
	}
`;
