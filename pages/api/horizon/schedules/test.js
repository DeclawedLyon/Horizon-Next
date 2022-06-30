export default function handler(req, res) {

  if (req.method === 'POST') {
    res.status(200).send("test")
  }
  if (req.method === "GET") {
    res.status(200).json([
      {
        day: 'Monday',
        date: new Date(),
        key: `Schedule:${new Date()}`,
        dailySchedule: [
          {
            startTime: '07:00',
            endTime: '08:00',
            plan: ['Trim harbor sign']
          },
          {
            startTime: '08:00',
            endTime: '09:00',
            plan: ['Trim Collville']
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            plan: ['Trim Collville']
          },
          {
            startTime: '10:00',
            endTime: '11:00',
            plan: ['C-cuts']
          },
          {
            startTime: '11:00',
            endTime: '12:00',
            plan: ['C-cuts']
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            plan: ['Trim Colville (Soccer Field)']
          },
          {
            startTime: '13:00',
            endTime: '14:00',
            plan: ['Trim Colville (Baseball Diamond)']
          },
          {
            startTime: '14:00',
            endTime: '15:00',
            plan: ['Trim Colville (Base Hospital)', 'Lock Up Tools']
          },
        ],
        // ?? week: '1,2,3,4' ??
      },
      {
        day: 'Tuesday',
        date: new Date(),
        key: `Schedule:${new Date()}`,
        dailySchedule: [
          {
            startTime: '07:00',
            endTime: '08:00',
            plan: ['Trim harbor sign']
          },
          {
            startTime: '08:00',
            endTime: '09:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '10:00',
            endTime: '11:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '11:00',
            endTime: '12:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            plan: ['Trim Colville (Soccer Field)']
          },
          {
            startTime: '13:00',
            endTime: '14:00',
            plan: ['Friends Clean Up']
          },
          {
            startTime: '14:00',
            endTime: '15:00',
            plan: ['Friends Clean Up', 'Lock Up Tools']
          },
        ],
        // ?? week: '1,2,3,4' ??
      },
      {
        day: 'Wednesday',
        date: new Date(),
        key: `Schedule:${new Date()}`,
        dailySchedule: [
          {
            startTime: '07:00',
            endTime: '08:00',
            plan: ['Trim harbor sign']
          },
          {
            startTime: '08:00',
            endTime: '09:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '10:00',
            endTime: '11:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '11:00',
            endTime: '12:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            plan: ['Trim Colville (Soccer Field)']
          },
          {
            startTime: '13:00',
            endTime: '14:00',
            plan: ['Trim Colville (Baseball Diamond)']
          },
          {
            startTime: '14:00',
            endTime: '15:00',
            plan: ['Trim Colville (Base Hospital)', 'Lock Up Tools']
          },
        ],
        // ?? week: '1,2,3,4' ??
      },
      {
        day: 'Thursday',
        date: new Date(),
        key: `Schedule:${new Date()}`,
        dailySchedule: [
          {
            startTime: '07:00',
            endTime: '08:00',
            plan: ['Trim harbor sign']
          },
          {
            startTime: '08:00',
            endTime: '09:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '10:00',
            endTime: '11:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '11:00',
            endTime: '12:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            plan: ['Trim Colville (Soccer Field)']
          },
          {
            startTime: '13:00',
            endTime: '14:00',
            plan: ['Trim Colville (Baseball Diamond)']
          },
          {
            startTime: '14:00',
            endTime: '15:00',
            plan: ['Trim Colville (Base Hospital)', 'Lock Up Tools']
          },
        ],
        // ?? week: '1,2,3,4' ??
      },
      {
        day: 'Friday',
        date: new Date(),
        key: `Schedule:${new Date()}`,
        dailySchedule: [
          {
            startTime: '07:00',
            endTime: '08:00',
            plan: ['Trim harbor sign']
          },
          {
            startTime: '08:00',
            endTime: '09:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            plan: ['Trim Naden (Entrance)']
          },
          {
            startTime: '10:00',
            endTime: '11:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '11:00',
            endTime: '12:00',
            plan: ['Trim FireHall']
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            plan: ['Trim Colville (Soccer Field)']
          },
          {
            startTime: '13:00',
            endTime: '14:00',
            plan: ['Trim Colville (Baseball Diamond)']
          },
          {
            startTime: '14:00',
            endTime: '15:00',
            plan: ['Trim Colville (Base Hospital)', 'Lock Up Tools']
          },
        ],
        // ?? week: '1,2,3,4' ??
      },
    ])
  }
}