import * as dotenv from "dotenv"

import { Client } from "@notionhq/client"

dotenv.config()

async function main() {
    const notionClient = new Client({ auth: process.env.NOTION_TOKEN})
    const notionUsers = await notionClient.users.list({})
    console.table(notionUsers.results)

    const {results: databaseResults} = await notionClient.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!
    })
    console.table(databaseResults)
    console.log(JSON.stringify(databaseResults, null, "  "))
}
main()