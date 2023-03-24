import { gql } from "apollo-server";

export const UserTypeDef = gql`
	type User {
		id: ID!
		username: String!
		name: String!
		email: String!
		followedBy: [User!]!
		following: [User!]!
	}
`;
