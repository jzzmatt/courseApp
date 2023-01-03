import Head from "next/head";
import Image from "next/image";
import { useQuery, gql, useMutation, useSubscription } from "@apollo/client";
import Searching from "../components/Searching";

const GET_JOBS = gql`
  subscription getJobs {
    jobs(order_by: { created_at: desc }) {
      id
      title
      content
      created_at
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useSubscription(GET_JOBS);

  // console.log({ data });

  if (loading) return <h1>...is Loading</h1>;
  if (error) {
    console.error(error);
    return <h1>Error !</h1>;
  }

  return (
    <div className='mt-10 container text-center'>
      <h1 className='text-2xl'>JOB DASHBOARD</h1>
      <Searching jobsList={data} />
      {/* {
        <ul>
          {data.jobs.map((job) => {
            return <li key={job.id}>{job.title}</li>;
          })}
        </ul>
      } */}
    </div>
  );
};

export default Home;
