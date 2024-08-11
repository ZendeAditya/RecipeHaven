import { ApolloServer, } from "@apollo/server";
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from "../../../../graphql/typeDef";
import { resolvers } from "../../../../graphql/resolvers";
import { NextResponse } from "next/server";

const server = new ApolloServer({
    typeDefs,
    resolvers,

});


export async function OPTIONS(request: Request) {
    const allowedOrigin = request.headers.get("origin");
    const response = new NextResponse(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": allowedOrigin || "http://localhost:3000/api/graphql",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
                "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
            "Access-Control-Max-Age": "86400",
        },
    });

    return response;
}

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };