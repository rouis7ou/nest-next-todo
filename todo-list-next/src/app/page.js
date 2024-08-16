import Head from "next/head";
import ToDoList from "../components/todo-list";
import Layout from "../components/layout";

export default function Home() {
  return(
      <div>
      <Head>
        <title>To Do App</title>
        <meta name="description" content="To Do" />
      </Head>
        <Layout>
          <ToDoList />
        </Layout>
      </div>
  )
}
