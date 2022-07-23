import mysql from 'serverless-mysql';


console.log(process.env.MYSQL_PASSWORD)
console.log(process.env.MYSQL_USER)
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_DATABASE)
console.log(process.env.MYSQL_PORT)
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}