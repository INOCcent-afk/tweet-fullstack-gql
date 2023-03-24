import { gql } from "apollo-server";

export const userTypeDef = gql`
	type User {
		id: ID!
		username: String!
		name: String!
		email: String!
		followedBy: [User!]!
		following: [User!]!
	}
`;
