import * as dotenv from "dotenv"

const { Client } = require("@notionhq/client")

dotenv.config()

async function main() {
    const notionClient = new Client({ auth: process.env.NOTION_TOKEN})
    const notionUsers = await notionClient.users.list()
    console.log(notionUsers)

    const databaseResponse = await notionClient.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID
    })
    console.log(databaseResponse)
}
main()