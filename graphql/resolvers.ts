
import { queries } from "./queries";
import { mutation } from "./mutation"
export const resolvers = {
    Query: {
        ...queries,
    },
    Mutation: {
        ...mutation,
    }
};