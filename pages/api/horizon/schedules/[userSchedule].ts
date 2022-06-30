import { NextApiRequest, NextApiResponse } from "next";
import { capitalizeFirstLetter } from "../../../../src/helperFunctions";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getScheduleByUserId(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userName = req.query.userSchedule
    const capitalizedName = capitalizeFirstLetter(userName);

    const openDb = async function() {
      return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
      });
    }
    const getUserSchedules = async (date: string) => {
      const test = date;
      const db = await openDb();
      const userId = await db.all(`SELECT id FROM Users WHERE userName = "${capitalizedName}"`)

      const userSchedule = await db.all(`SELECT a.*, b.* FROM Users as a
      LEFT JOIN Schedules as b
      ON a.id = b.ownerId
      WHERE a.id = ${userId[0].id}
      `)

      return userSchedule
    };
    return getUserSchedules('null').then(schedule => res.status(200).send(JSON.stringify(schedule)))
  }
  catch (error) {
    // figure out how to handle errors properly!!
    res.json(error)
    res.send(error)
    res.status(405).end()
  }
}

